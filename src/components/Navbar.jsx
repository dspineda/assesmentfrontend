import '../styles/navbar.css';
import {NavLink} from 'react-router-dom';


function Navbar() {
	return (
		<header>
			<NavLink to="/">
			<a href='#' className='logo'>
				<span>deiv</span>Compras
			</a>
			</NavLink>
			<nav className='navbar'>
				<a href='#'><NavLink to="/">Home</NavLink></a>
				<a href='#'><NavLink to="/product">Product Detail</NavLink></a>
				<a href='#'><NavLink to="/about">About</NavLink></a>
			</nav>
		</header>
	);
}

export default Navbar;
