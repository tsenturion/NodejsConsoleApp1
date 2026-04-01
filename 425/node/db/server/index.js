const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: process.env.PGUSER || 'postgres',
    host: process.env.PGHOST || 'localhost',
    database: process.env.PGDATABASE || 'postgres',
    password: process.env.PGPASSWORD || 'admin',
    port: Number(process.env.PGPORT) || 5432,
});

const PORT = Number(process.env.PORT) || 3000;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;

function parseUserPayload(body = {}) {
    const firstName = String(body.first_name ?? '').trim();
    const lastName = String(body.last_name ?? '').trim();
    const email = String(body.email ?? '').trim().toLowerCase();

    const registrationDateRaw = body.registration_date;
    const registrationDate =
        registrationDateRaw === null ||
        registrationDateRaw === undefined ||
        registrationDateRaw === ''
            ? null
            : String(registrationDateRaw).trim();

    const cityIdRaw = body.city_id;
    let cityId = null;
    if (cityIdRaw !== null && cityIdRaw !== undefined && cityIdRaw !== '') {
        const parsedCityId = Number(cityIdRaw);
        if (!Number.isInteger(parsedCityId)) {
            return { errors: ['city_id must be an integer'] };
        }
        cityId = parsedCityId;
    }

    const errors = [];

    if (!firstName) {
        errors.push('first_name is required');
    }

    if (!lastName) {
        errors.push('last_name is required');
    }

    if (!email) {
        errors.push('email is required');
    } else if (!emailRegex.test(email)) {
        errors.push('email is invalid');
    }

    if (registrationDate && !isoDateRegex.test(registrationDate)) {
        errors.push('registration_date must be in YYYY-MM-DD format');
    }

    if (errors.length > 0) {
        return { errors };
    }

    return {
        data: {
            firstName,
            lastName,
            email,
            registrationDate,
            cityId,
        },
    };
}

app.get('/api/users', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT id, first_name, last_name, email, created_at, registration_date, city_id FROM users ORDER BY id DESC'
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/users', async (req, res) => {
    const payload = parseUserPayload(req.body);

    if (payload.errors) {
        res.status(400).json({ error: payload.errors.join(', ') });
        return;
    }

    const { firstName, lastName, email, registrationDate, cityId } = payload.data;

    try {
        const result = await pool.query(
            `
                INSERT INTO users (first_name, last_name, email, registration_date, city_id)
                VALUES ($1, $2, $3, COALESCE($4::date, CURRENT_DATE), $5)
                RETURNING id, first_name, last_name, email, created_at, registration_date, city_id
            `,
            [firstName, lastName, email, registrationDate, cityId]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);

        if (error.code === '23503') {
            res.status(400).json({ error: 'City not found. Check city_id value.' });
            return;
        }

        if (error.code === '23505') {
            res.status(409).json({ error: 'User with this email already exists.' });
            return;
        }

        if (error.code === '22007') {
            res.status(400).json({ error: 'Invalid registration_date format.' });
            return;
        }

        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
