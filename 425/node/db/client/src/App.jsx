import { useCallback, useEffect, useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

function getTodayInputValue() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

const initialFormState = {
    first_name: "",
    last_name: "",
    email: "",
    registration_date: getTodayInputValue(),
    city_id: "",
};

const textInputClassName =
    "mt-1 w-full rounded-xl border border-emerald-200 bg-white/90 px-4 py-2.5 text-sm text-slate-800 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300";

async function request(path, options = {}) {
    const response = await fetch(`${API_BASE_URL}${path}`, options);
    const contentType = response.headers.get("content-type") || "";
    const payload = contentType.includes("application/json")
        ? await response.json()
        : await response.text();

    if (!response.ok) {
        if (typeof payload === "object" && payload?.error) {
            throw new Error(payload.error);
        }
        throw new Error(`Request failed with status ${response.status}`);
    }

    return payload;
}

function formatDate(dateValue) {
    if (!dateValue) {
        return "—";
    }

    const rawValue = String(dateValue);
    const plainDateMatch = rawValue.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (plainDateMatch) {
        const [, year, month, day] = plainDateMatch;
        return `${day}.${month}.${year}`;
    }

    const asDate = new Date(rawValue);
    if (!Number.isNaN(asDate.getTime())) {
        return new Intl.DateTimeFormat("ru-RU", {
            dateStyle: "medium",
        }).format(asDate);
    }

    return rawValue;
}

function formatDateTime(dateTimeValue) {
    if (!dateTimeValue) {
        return "—";
    }

    const asDate = new Date(dateTimeValue);
    if (Number.isNaN(asDate.getTime())) {
        return String(dateTimeValue);
    }

    return new Intl.DateTimeFormat("ru-RU", {
        dateStyle: "medium",
        timeStyle: "short",
    }).format(asDate);
}

function App() {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState(initialFormState);
    const [isLoadingUsers, setIsLoadingUsers] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const loadUsers = useCallback(async () => {
        setError("");
        setIsLoadingUsers(true);
        try {
            const loadedUsers = await request("/api/users");
            setUsers(Array.isArray(loadedUsers) ? loadedUsers : []);
        } catch (requestError) {
            setError(requestError.message || "Не удалось загрузить пользователей.");
        } finally {
            setIsLoadingUsers(false);
        }
    }, []);

    useEffect(() => {
        loadUsers();
    }, [loadUsers]);

    const handleFormFieldChange = (event) => {
        const { name, value } = event.target;
        setForm((currentForm) => ({
            ...currentForm,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        setSuccessMessage("");

        const payload = {
            first_name: form.first_name.trim(),
            last_name: form.last_name.trim(),
            email: form.email.trim(),
            registration_date: form.registration_date || null,
            city_id: form.city_id === "" ? null : Number(form.city_id),
        };

        if (!payload.first_name || !payload.last_name || !payload.email) {
            setError("Заполните имя, фамилию и email.");
            return;
        }

        setIsSubmitting(true);
        try {
            const createdUser = await request("/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            setUsers((currentUsers) => [createdUser, ...currentUsers]);
            setForm((currentForm) => ({
                ...initialFormState,
                registration_date: currentForm.registration_date,
                city_id: currentForm.city_id,
            }));
            setSuccessMessage(`Пользователь "${createdUser.first_name} ${createdUser.last_name}" добавлен.`);
        } catch (requestError) {
            setError(requestError.message || "Не удалось добавить пользователя.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <section className="animate-fade-up rounded-3xl border border-emerald-200/80 bg-white/70 p-6 shadow-[0_18px_60px_-25px_rgba(15,118,110,0.35)] backdrop-blur">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                            PostgreSQL + Node.js
                        </p>
                        <h1 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                            Управление пользователями
                        </h1>
                        <p className="mt-2 text-sm text-slate-600">
                            Добавляйте пользователей и сразу проверяйте, что запись попала в БД.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 px-4 py-3 text-sm text-emerald-900">
                        Всего пользователей: <span className="font-semibold">{users.length}</span>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="grid gap-4 rounded-2xl border border-slate-200 bg-white/85 p-4 md:grid-cols-2"
                >
                    <label className="block text-sm font-medium text-slate-700">
                        Имя
                        <input
                            className={textInputClassName}
                            name="first_name"
                            value={form.first_name}
                            onChange={handleFormFieldChange}
                            placeholder="Иван"
                            required
                        />
                    </label>

                    <label className="block text-sm font-medium text-slate-700">
                        Фамилия
                        <input
                            className={textInputClassName}
                            name="last_name"
                            value={form.last_name}
                            onChange={handleFormFieldChange}
                            placeholder="Иванов"
                            required
                        />
                    </label>

                    <label className="block text-sm font-medium text-slate-700">
                        Email
                        <input
                            className={textInputClassName}
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleFormFieldChange}
                            placeholder="ivan@example.com"
                            required
                        />
                    </label>

                    <label className="block text-sm font-medium text-slate-700">
                        Дата регистрации
                        <input
                            className={textInputClassName}
                            name="registration_date"
                            type="date"
                            value={form.registration_date}
                            onChange={handleFormFieldChange}
                        />
                    </label>

                    <label className="block text-sm font-medium text-slate-700 md:col-span-2">
                        ID города (опционально)
                        <input
                            className={textInputClassName}
                            name="city_id"
                            type="number"
                            min="1"
                            value={form.city_id}
                            onChange={handleFormFieldChange}
                            placeholder="Например, 3"
                        />
                    </label>

                    <div className="flex flex-wrap items-center gap-3 md:col-span-2">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300 disabled:cursor-not-allowed disabled:bg-emerald-300"
                        >
                            {isSubmitting ? "Сохранение..." : "Добавить пользователя"}
                        </button>
                        <button
                            type="button"
                            onClick={loadUsers}
                            disabled={isLoadingUsers}
                            className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            Обновить список
                        </button>
                    </div>
                </form>

                {error && (
                    <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                        {error}
                    </div>
                )}

                {successMessage && (
                    <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                        {successMessage}
                    </div>
                )}

                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200 text-sm">
                            <thead className="bg-slate-50">
                                <tr className="text-left text-xs uppercase tracking-wide text-slate-500">
                                    <th className="px-4 py-3 font-semibold">ID</th>
                                    <th className="px-4 py-3 font-semibold">Имя</th>
                                    <th className="px-4 py-3 font-semibold">Фамилия</th>
                                    <th className="px-4 py-3 font-semibold">Email</th>
                                    <th className="px-4 py-3 font-semibold">Дата регистрации</th>
                                    <th className="px-4 py-3 font-semibold">ID города</th>
                                    <th className="px-4 py-3 font-semibold">Создан</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 bg-white">
                                {isLoadingUsers && (
                                    <tr>
                                        <td colSpan={7} className="px-4 py-8 text-center text-slate-500">
                                            Загрузка пользователей...
                                        </td>
                                    </tr>
                                )}

                                {!isLoadingUsers && users.length === 0 && (
                                    <tr>
                                        <td colSpan={7} className="px-4 py-8 text-center text-slate-500">
                                            Пользователей пока нет.
                                        </td>
                                    </tr>
                                )}

                                {!isLoadingUsers &&
                                    users.map((user) => (
                                        <tr key={user.id} className="transition hover:bg-emerald-50/40">
                                            <td className="px-4 py-3 font-medium text-slate-700">{user.id}</td>
                                            <td className="px-4 py-3 text-slate-700">{user.first_name}</td>
                                            <td className="px-4 py-3 text-slate-700">{user.last_name}</td>
                                            <td className="px-4 py-3 text-slate-700">{user.email}</td>
                                            <td className="px-4 py-3 text-slate-700">
                                                {formatDate(user.registration_date)}
                                            </td>
                                            <td className="px-4 py-3 text-slate-700">
                                                {user.city_id ?? "—"}
                                            </td>
                                            <td className="px-4 py-3 text-slate-700">
                                                {formatDateTime(user.created_at)}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
