import './navbar.css';
import CartWidget from '../Cartwidget/CartWidget';

const NavBar = () => {
    return (
    <header>
        <h1>Mercadito Tech</h1>
        <ul className="Navegador">
            <li>
                <a className="List" href="index.html">Inicio</a>
            </li>
            <li>
                <a className="List" href="index.html">Tienda</a>
            </li>
            <li>
                <a className="List" href="index.html">Contacto</a>
            </li>
            <li>
                <a className="List" href="index.html">Quienes somos?</a>
            </li>
            <li>
                <CartWidget  />
            </li>
        </ul>
    </header>
    
    );
        
};

export default NavBar;