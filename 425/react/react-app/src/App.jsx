import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Header({ title, subtitle }) {
  return (
    <header style={styles.header}>
      {/* Выводим заголовок, который передали в компонент через props */}
      <h1 style={styles.title}>{title}</h1>

      {/* Выводим подзаголовок, который тоже приходит через props */}
      <p style={styles.subtitle}>{subtitle}</p>
    </header>
  );
}

function UserCard({ name, age, isAuth }) {
  return (
    <section style={styles.card}>
      <h2>Карточка пользователя</h2>

      {/* Вставляем JavaScript-переменные внутрь JSX через фигурные скобки */}
      <p>
        Имя: <strong>{name}</strong>
      </p>

      <p>
        Возраст: <strong>{age}</strong>
      </p>

      {/* Показываем один из двух вариантов интерфейса по условию */}
      <p>
        Статус:{" "}
        {isAuth ? (
          <span style={styles.success}>авторизован</span>
        ) : (
          <span style={styles.error}>не авторизован</span>
        )}
      </p>

      {/* Если условие true, React отрисует абзац; если false — ничего не покажет */}
      {isAuth && <p style={styles.note}>Доступ к личному кабинету открыт.</p>}
    </section>
  );
}

function FruitList({ fruits }) {
  return (
    <section style={styles.card}>
      <h2>Список фруктов</h2>

      <ul style={styles.list}>
        {fruits.map((fruit, index) => (
          // Для каждого элемента массива создаём отдельный li
          // key помогает React правильно отслеживать элементы списка
          <li key={index} style={styles.listItem}>
            {fruit}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ExampleBlock() {
  const firstNumber = 8;
  const secondNumber = 12;
  const userName = "Анна";

  return (
    <section style={styles.card}>
      <h2>Примеры JSX-выражений</h2>

      {/* Внутри JSX можно выводить переменные */}
      <p>Привет, {userName}.</p>

      {/* Внутри JSX можно вычислять выражения */}
      <p>
        Сумма чисел {firstNumber} и {secondNumber}:{" "}
        <strong>{firstNumber + secondNumber}</strong>
      </p>

      {/* JSX можно сохранить в переменную и затем вернуть или вставить в интерфейс */}
      {(() => {
        const message = <p style={styles.inlineBox}>JSX можно использовать как выражение.</p>;
        return message;
      })()}
    </section>
  );
}

export default function App() {
  const courseName = "Изучаем JSX в React";
  const lessonNumber = 1;
  const isAuth = true;

  const student = {
    name: "Анна",
    age: 19,
  };

  const fruits = ["яблоко", "банан", "апельсин", "груша"];

  return (
    <>
      {/* Fragment объединяет несколько элементов без лишнего div в DOM */}
      <div className="app" style={styles.app}>
        <Header
          title={courseName}
          subtitle={`Урок ${lessonNumber}: базовый синтаксис JSX`}
        />

        <main style={styles.main}>
          <section style={styles.card}>
            <h2>Что показывает это приложение</h2>

            <p>
              Этот интерфейс собран с помощью <strong>JSX</strong>. Здесь мы
              используем компоненты, переменные, выражения, условия и списки.
            </p>

            <p style={styles.inlineBox}>
              JSX внешне похож на HTML, но внутри React это JavaScript-выражения.
            </p>
          </section>

          <UserCard
            name={student.name}
            age={student.age}
            isAuth={isAuth}
          />

          <FruitList fruits={fruits} />

          <ExampleBlock />
        </main>
      </div>
    </>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f6f8",
    color: "#222",
    padding: "30px",
    boxSizing: "border-box",
  },
  header: {
    marginBottom: "24px",
    padding: "20px",
    borderRadius: "14px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)",
  },
  title: {
    margin: "0 0 10px 0",
    fontSize: "32px",
  },
  subtitle: {
    margin: 0,
    color: "#555",
    fontSize: "18px",
  },
  main: {
    display: "grid",
    gap: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "14px",
    padding: "20px",
    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)",
  },
  list: {
    paddingLeft: "20px",
    marginBottom: 0,
  },
  listItem: {
    marginBottom: "8px",
  },
  success: {
    color: "green",
    fontWeight: "bold",
  },
  error: {
    color: "crimson",
    fontWeight: "bold",
  },
  note: {
    marginTop: "12px",
    padding: "10px",
    backgroundColor: "#eef9ee",
    borderRadius: "8px",
  },
  inlineBox: {
    marginTop: "12px",
    padding: "10px",
    backgroundColor: "#eef3ff",
    borderRadius: "8px",
  },
};