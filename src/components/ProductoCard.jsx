// src/components/ProductoCard.jsx
const soles = (monto) => `S/ ${monto.toFixed(2)}`;

export default function ProductoCard({ producto, onAgregar }) {
  const { nombre, categoria, precio, unidad, imagen } = producto;

  const usarReemplazo = (e) => {
    if (!e.currentTarget.src.endsWith("sin-imagen.svg")) {
      e.currentTarget.src = "/img/sin-imagen.svg";
    }
  };

  return (
    <article className="card">
      <div className="foto">
        <img src={imagen} alt={nombre} width="400" height="300" loading="lazy" onError={usarReemplazo} />
      </div>
      <div className="card-cuerpo">
        <span className="etiqueta">{categoria}</span>
        <h3>{nombre}</h3>
        <p className="unidad">{unidad}</p>
        <div className="card-pie">
          <strong>{soles(precio)}</strong>
          <button onClick={() => onAgregar(producto)}>Agregar</button>
        </div>
      </div>
    </article>
  );
}