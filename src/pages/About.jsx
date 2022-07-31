import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const AboutPage = () => {
	return (
		<div>
			<Navbar />
			<section className='profile'>
				<div className='profile__img'>
					<img src='../perfil.png' alt=''></img>
				</div>
				<div className='profile__info'>
					<h1 className='profile__info__name'>David S. Pineda</h1>
					<p className='profile__info__description'>
						One of my greatest passions is to resolve a problem and to achieve
						understanding it by a logic and simple way. I really enjoy to feel
						helping someone to overcome any problem and to achieve its
						objectives, always avoiding to become into another problem. I like
						to learn new things. I understand the importance of active
						listening, collaborative process and patience. I really like to take
						advantage of every time, to beginning the work early.
					</p>

					<h3 className='profile__info__listTitle'>Program learning:</h3>
					<div className='profile__info__list'>
						<ul>- casa de estudio: Universidad de los Andes</ul>
						<ul>- carrera: Ingeniería en Sistemas Computacionales</ul>
						<ul>- semestre: sexto</ul>
					</div>
					<div className='profile__info__contact'>
						<h3>Contact:</h3>
						<h4 className='profile__info__contact__correo'>
							dspinedao@gmail.com
						</h4>
						<a
							className='profile__info__contact__git'
							href='https://github.com/dspineda'
						>
							github.com/dspineda
						</a>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default AboutPage;
