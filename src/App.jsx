// src/App.jsx
import { useState } from "react";
import Encabezado from "./components/Encabezado.jsx";
import Catalogo from "./components/Catalogo.jsx";
import CarritoDrawer from "./components/CarritoDrawer.jsx";
import FondoFlotante from "./components/FondoFlotante.jsx"; // 👈 1. Importamos el fondo
import "./App.css";

export default function App() {
  const [carrito, setCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  const agregar = (producto) => {
    setCarrito((anterior) => {
      const existe = anterior.find((p) => p.id === producto.id);
      if (existe) {
        return anterior.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      return [...anterior, { ...producto, cantidad: 1 }];
    });
  };

  const cambiarCantidad = (id, delta) => {
    setCarrito((anterior) =>
      anterior
        .map((item) => {
          if (item.id === id) {
            const nuevaCantidad = item.cantidad + delta;
            return nuevaCantidad > 0 ? { ...item, cantidad: nuevaCantidad } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const eliminar = (id) => {
    setCarrito((anterior) => anterior.filter((item) => item.id !== id));
  };

  const vaciar = () => setCarrito([]);

  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalMonto = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <>
      <FondoFlotante /> {/* 👈 2. Lo colocamos aquí al inicio */}
      <Encabezado cantidad={cantidadTotal} alAbrirCarrito={() => setCarritoAbierto(true)} />
      <main>
        <section className="portada">
          <p className="ceja">Horneado hoy en El Tambo, Huancayo</p>
          <h1>Tortas, panes y bocaditos recién salidos del horno</h1>
          <a href="#catalogo" className="boton">Ver catálogo</a>
        </section>
        <Catalogo onAgregar={agregar} />
      </main>

      <footer id="contacto">
        <p>Pastelería Delicia · Av. Huancavelica 1250, El Tambo</p>
        <p>Total acumulado: <strong>S/ {totalMonto.toFixed(2)}</strong></p>
      </footer>

      <CarritoDrawer
        abierto={carritoAbierto}
        alCerrar={() => setCarritoAbierto(false)}
        carrito={carrito}
        alCambiarCantidad={cambiarCantidad}
        alEliminar={eliminar}
        alVaciar={vaciar}
      />
    </>
  );
}