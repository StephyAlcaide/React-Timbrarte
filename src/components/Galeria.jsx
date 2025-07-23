import './Galeria.css';
import { useContext } from 'react';
import { CarritoContext } from '../Carrito';


const productos = [
  { nombre: 'Cuaderno Snoopy', img: '/img/snoopy.jpeg', precio: '$13.500' },
  { nombre: 'Llavero post-it', img: '/img/dinosaurio.jpeg', precio: '$2.000' },
  { nombre: 'Libreta+llavero', img: '/img/girlcode.jpeg', precio: '$8.000' }
];


function Galeria() {
  const { agregarAlCarrito } = useContext(CarritoContext);

  return (
    <div className="galeria">
      {productos.map((item, index) => (
        <div key={index} className="producto">
          <img src={item.img} alt={item.nombre} />
          <h3>{item.nombre}</h3>
          <p>{item.precio}</p>
          <button onClick={() => agregarAlCarrito(item)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
}

export default Galeria;
