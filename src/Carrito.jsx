import { createContext, useState, useContext } from 'react';

// PROVEEDOR CONTEXTO
export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = producto => setCarrito([...carrito, producto]);

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
}


// 🛍️ COMPONENTE VISUAL
export default function Carrito() {
  const { carrito } = useContext(CarritoContext);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>🛍️ Carrito: {carrito.length} producto(s)</h2>

      {carrito.length > 0 && (
        <ul>
          {carrito.map((item, index) => (
            <li key={index}>{item.nombre} - {item.precio}</li>
          ))}
        </ul>
      )}

      {carrito.length > 0 && (
        <button onClick={() => setMostrarFormulario(true)}>
          Finalizar compra 💜
        </button>
      )}

      {mostrarFormulario && (
        <form style={{ marginTop: '20px' }}>
          <h3>Formulario de compra</h3>
          <input type="text" placeholder="Nombre completo" required />
          <br />
          <input type="email" placeholder="Correo electrónico" required />
          <br />
          <input type="text" placeholder="Dirección de envío" required />
          <br />
          <button type="submit">Enviar pedido</button>
        </form>
      )}
    </div>
  );
}
