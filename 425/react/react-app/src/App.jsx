import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SearchForm from "./components/SearchForm";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

export default function App() {
  // Массив данных о товарах.
  // В реальном проекте эти данные могут приходить с сервера.
  const products = [
    { id: 1, title: "Смартфон", price: 500, category: "Электроника" },
    { id: 2, title: "Ноутбук", price: 1200, category: "Электроника" },
    { id: 3, title: "Наушники", price: 150, category: "Аксессуары" },
    { id: 4, title: "Клавиатура", price: 90, category: "Аксессуары" },
  ];

  return (
    <div className="app">
      {/* Верхняя часть страницы */}
      <Header />

      <main className="layout">
        {/* Боковая панель с навигацией */}
        <Sidebar />

        <section className="content">
          {/* Форма поиска как отдельный независимый компонент */}
          <SearchForm />

          {/* Список товаров получает данные через props */}
          <ProductList products={products} />
        </section>
      </main>

      {/* Нижняя часть страницы */}
      <Footer />
    </div>
  );
}