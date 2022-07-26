import Navbar from "../components/Navbar";


const Homepage = () => {
	return (
		<div>
			<Navbar />
				<div className="home">
					<img className="home__imagen" src="..\img\compraHome.png" alt="logo" />
				</div>
		</div>
	);
};

export default Homepage;
