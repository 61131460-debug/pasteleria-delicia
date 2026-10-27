// src/components/FondoFlotante.jsx
export default function FondoFlotante() {
  // Lista de emojis temáticos de pastelería
  const elementos = ["🍰", "🧁", "🎂", "🍩", "🍪", "🥐", "🍓", "🥧"];

  // Generamos 18 partículas flotantes con posiciones y tiempos aleatorios
  const particulas = Array.from({ length: 18 }, (_, index) => {
    const emoji = elementos[index % elementos.length];
    const left = Math.random() * 95; // Posición horizontal (%)
    const duration = 12 + Math.random() * 10; // Duración de caída (12s a 22s)
    const delay = Math.random() * 10; // Retraso de inicio (0s a 10s)
    const size = 1.2 + Math.random() * 1.5; // Tamaño del emoji (rem)

    return {
      id: index,
      emoji,
      style: {
        left: `${left}%`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        fontSize: `${size}rem`,
      },
    };
  });

  return (
    <div className="fondo-flotante-contenedor" aria-hidden="true">
      {particulas.map((p) => (
        <span key={p.id} className="particula-postre" style={p.style}>
          {p.emoji}
        </span>
      ))}
    </div>
  );
}