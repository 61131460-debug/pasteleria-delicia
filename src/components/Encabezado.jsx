// src/components/Encabezado.jsx
export default function Encabezado({ cantidad, alAbrirCarrito }) {
  return (
    <header className="encabezado">
      <a href="#" className="marca">
        Pastelería <span>Delicia</span>
      </a>
      <nav>
        <a href="#catalogo">Catálogo</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <button className="btn-carrito" onClick={alAbrirCarrito} aria-label="Ver carrito">
        🛒 Carrito
        <b key={cantidad} className="badge-carrito">
          {cantidad}
        </b>
      </button>
    </header>
  );
}