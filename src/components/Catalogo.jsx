// src/components/Catalogo.jsx
import { useState } from "react";
import ProductoCard from "./ProductoCard.jsx";
import { productos, categorias } from "../data/productos.js";

export default function Catalogo({ onAgregar }) {
  const [categoria, setCategoria] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState("original");

  const texto = busqueda.trim().toLowerCase();
  const visibles = productos
    .filter((p) => categoria === "Todos" || p.categoria === categoria)
    .filter((p) => p.nombre.toLowerCase().includes(texto))
    .sort((a, b) =>
      orden === "menor" ? a.precio - b.precio :
      orden === "mayor" ? b.precio - a.precio : a.id - b.id
    );

  return (
    <section className="catalogo" id="catalogo">
      <div className="catalogo-cab">
        <h2>Catálogo</h2>
        <p>{visibles.length} de {productos.length} productos</p>
      </div>

      <div className="filtros">
        {categorias.map((c) => (
          <button key={c} className={c === categoria ? "activo" : ""} onClick={() => setCategoria(c)}>
            {c}
          </button>
        ))}
        <input type="search" placeholder="Buscar producto" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
        <select value={orden} onChange={(e) => setOrden(e.target.value)}>
          <option value="original">Orden original</option>
          <option value="menor">Precio: menor a mayor</option>
          <option value="mayor">Precio: mayor a menor</option>
        </select>
      </div>

      {visibles.length === 0 ? (
        <p className="vacio">No encontramos "{busqueda}".</p>
      ) : (
        <div className="grilla">
          {visibles.map((p) => (
            <ProductoCard key={p.id} producto={p} onAgregar={onAgregar} />
          ))}
        </div>
      )}
    </section>
  );
}