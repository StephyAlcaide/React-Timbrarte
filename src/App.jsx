import Logo from './components/Logo';
import Galeria from './components/Galeria';
import Carrito from './Carrito';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Logo />
      <h1 className="titulo">Bienvenid@ a TimbrArte 💜</h1>
      <Galeria />
      <Carrito />
      <footer className="footer">
        <p>Gracias por visitar TimbrArte. ¡Diseño que inspira! 💌</p>
      </footer>
    </div>
  );
}

export default App;

