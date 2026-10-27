// src/components/CarritoDrawer.jsx
const soles = (monto) => `S/ ${monto.toFixed(2)}`;

export default function CarritoDrawer({ abierto, alCerrar, carrito, alCambiarCantidad, alEliminar, alVaciar }) {
  if (!abierto) return null;

  const total = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0);

  return (
    <div className="drawer-overlay" onClick={alCerrar}>
      <aside className="drawer-contenido" onClick={(e) => e.stopPropagation()}>
        <header className="drawer-cabecera">
          <h2>Tu Carrito 🛒</h2>
          <button className="btn-cerrar" onClick={alCerrar}>✕</button>
        </header>

        <div className="drawer-cuerpo">
          {carrito.length === 0 ? (
            <div className="carrito-vacio">
              <span className="icono-vacio">🍰</span>
              <p>Tu carrito está vacío.</p>
              <small>¡Agrega un gustito desde el catálogo!</small>
            </div>
          ) : (
            <ul className="lista-carrito">
              {carrito.map((item) => (
                <li key={item.id} className="item-carrito">
                  <img src={item.imagen} alt={item.nombre} className="img-thumb" />
                  <div className="info-item">
                    <h4>{item.nombre}</h4>
                    <p className="precio-unitario">{soles(item.precio)} c/u</p>
                    <div className="controles-cantidad">
                      <button onClick={() => alCambiarCantidad(item.id, -1)}>-</button>
                      <span>{item.cantidad}</span>
                      <button onClick={() => alCambiarCantidad(item.id, 1)}>+</button>
                    </div>
                  </div>
                  <div className="subtotal-item">
                    <strong>{soles(item.precio * item.cantidad)}</strong>
                    <button className="btn-eliminar" onClick={() => alEliminar(item.id)} title="Eliminar producto">
                      🗑️
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {carrito.length > 0 && (
          <footer className="drawer-pie">
            <div className="total-fila">
              <span>Total a pagar:</span>
              <strong className="total-monto">{soles(total)}</strong>
            </div>
            <button className="btn-vaciar" onClick={alVaciar}>Vaciar carrito</button>
            <button className="btn-comprar" onClick={() => alert("¡Gracias por tu compra en Pastelería Delicia!")}>
              Finalizar Pedido ✨
            </button>
          </footer>
        )}
      </aside>
    </div>
  );
}