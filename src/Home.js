import fondo from './fondo.jpg';
import carrito from './carrito.png';
import tienda from './tienda.jpg';
import tiendita from './tiendita.png';
import tiendaa from './tiendaa.webp';
import carta from './carta.png';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <img src={fondo} className="fullscreen-image" alt="fondo" />
      <div className="image-container">
        <div>
          <Link to="/Menu">
            <img src={carta} alt="menu" style={{ width: "250px", height: "250px" }} />
          </Link>
          <h2>Menu</h2>
        </div>
        <div>
          <Link to="/Stores">
            <img src={tiendaa} alt="stores" style={{ width: "250px", height: "250px" }} />
          </Link>
          <h2>Stores</h2>
        </div>
        <div>
          <Link to="/Cart">
            <img src={carrito} alt="cart" style={{ width: "250px", height: "250px" }} />
          </Link>
          <h2>Cart</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
