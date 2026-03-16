export default function ProductCard({ title, price, category }) {
  return (
    <article className="product-card">
      {/* Компонент карточки отвечает только за отображение одного товара */}
      <h3>{title}</h3>
      <p>Категория: {category}</p>
      <p className="price">Цена: {price}€</p>

      <button className="buy-button">Купить</button>
    </article>
  );
}