import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <section className="product-list-section">
      <h2>Каталог товаров</h2>

      <div className="product-list">
        {products.map((product) => (
          // Для каждого объекта из массива создаём отдельный компонент ProductCard
          // key нужен React для корректного отслеживания элементов списка
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </section>
  );
}