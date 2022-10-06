import './navbar.css';
import CartWidget from '../Cartwidget/CartWidget';
import Icono from '../Icono/Icono';
import { NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
    <header>
        <ul className="Navegador">
            <li>
               <Icono />
            </li>
            <li>
                <NavLink className="nav__link" to='/'> Inicio</NavLink>
            </li>
            <li>
                <NavLink className="nav__link" to='/categoria/notebooks'> Notebooks</NavLink>
            </li>
            <li>
                <NavLink className="nav__link" to='/categoria/celulares'> Celulares</NavLink>
            </li>
            <li>
                <NavLink className="nav__link" to='/categoria/televisores'> Televisores</NavLink>
            </li>
            <li>
                <NavLink className="nav__link" to='cart'>
                    <CartWidget  /> 
                </NavLink>
                
            </li>
        </ul>
    </header>
    
    );
        
};

export default NavBar;