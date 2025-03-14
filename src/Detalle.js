import { useParams } from "react-router-dom";
import mantel from './mantel.jpg';
import carrito from './carrito.png';
import tienda from './tienda.jpg';
import carta from './carta.png';
import tacos from "./tacos.jpg";
import logo from "./logo.svg";
import fondo from "./fondo.jpg";
import loginImage from "./loginImage.jpg";

function Detalle() {
    const { palabra } = useParams(); 

    return (
        <div className="container">
            <nav className="navbar">
                <h1>{palabra}</h1> 
            </nav>

            <img src={mantel} className="fullscreen-image" alt="mantel" />
            
            <div className="image-container">
                <div>
                    <img src={tacos} alt="menu" style={{ width: "250px", height: "250px" }} />
                    <h2>Menu</h2>
                </div>
                <div>
                    <img src={logo} alt="stores" style={{ width: "250px", height: "250px" }} />
                    <h2>Stores</h2>
                </div>
                <div>
                    <img src={mantel} alt="cart" style={{ width: "250px", height: "250px" }} />
                    <h2>Cart</h2>
                </div>
            </div>
        </div>
    );
}

export default Detalle;
