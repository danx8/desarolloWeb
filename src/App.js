import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Detalle from "./Detalle";
import logo from "./logo.svg";
import fondo from "./fondo.jpg";
import tacos from "./tacos.jpg";
import loginImage from "./loginImage.jpg";
import "./App.css";

export default function App() {

    const [nombre, setUsername] = useState("");
    const [contrasena, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const ingresarHome = (event) => {
        event.preventDefault();
        if (!nombre) {
            setMessage("El nombre no puede estar vacio");
            return;
        } 
        if (contrasena.length < 5 || contrasena.length > 8) {
            setMessage("La contraseña debe tener entre 5 y 8 caracteres");
            return;
        }
        setIsAuthenticated(true);
    };

    return (
        <div className="App">
            {!isAuthenticated ? (
                <div>
                    <img src={loginImage} className="fullscreen-image" alt="loginImage" />
                    <h1>TOO GOOD TO GO</h1>
                    <h2>FOOD WASTING SOLUTION</h2>
                    <form onSubmit={ingresarHome}>
                        <label>Nombre:</label>
                        <input type="text" value={nombre} onChange={(e) => setUsername(e.target.value)} required />
                        <br /><br />
                        <label>Contraseña:</label>
                        <input type="contrasena" value={contrasena} onChange={(e) => setPassword(e.target.value)} required />
                        <br /><br />
                        <button type="submit">Login</button>
                    </form>
                    <p>{message}</p>
                </div>
            ) : (
              <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/:palabra" element={<Detalle />} /> 
                  <Route path="*" element={<Navigate to="/" />} /> 
              </Routes>
          </Router>
            )}
        </div>
    );
}
