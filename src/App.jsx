import Homepage from './pages/Home';
import AboutPage from './pages/About';
import Productpage from './pages/Productpage';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route path='/about' element={<AboutPage />} />
			<Route path='/' element={<Homepage />} />
			<Route path='/product/:id' element={<Productpage />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default App;
