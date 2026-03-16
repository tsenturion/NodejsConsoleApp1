import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";

// Находим корневой DOM-элемент в index.html и подключаем к нему React-приложение
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Рендерим главный компонент приложения */}
    <App />
  </React.StrictMode>
);