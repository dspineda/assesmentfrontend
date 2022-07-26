import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<header>
			<NavLink to='/'>
				<a href='#' className='logo'>
					<span>Deiv</span>Compras
				</a>
			</NavLink>
			<nav className='navbar'>
				<a href='#'>
					<NavLink to='/'>Home</NavLink>
				</a>
				<a href='#'>
					<NavLink to='/about'>About</NavLink>
				</a>
			</nav>
		</header>
	);
};

export default Navbar;
