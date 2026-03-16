export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Навигационный блок вынесен в отдельный компонент */}
      <h2>Меню</h2>

      <nav>
        <ul className="menu-list">
          <li>Главная</li>
          <li>Каталог</li>
          <li>Корзина</li>
          <li>Контакты</li>
        </ul>
      </nav>
    </aside>
  );
}