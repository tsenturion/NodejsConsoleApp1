export default function SearchForm() {
  return (
    <div className="search-box">
      {/* Это только визуальная форма поиска.
          Логику обработки можно будет добавить позже. */}
      <h2>Поиск товаров</h2>

      <form className="search-form">
        <input
          type="text"
          placeholder="Введите название товара"
          className="search-input"
        />

        <button type="button" className="search-button">
          Найти
        </button>
      </form>
    </div>
  );
}