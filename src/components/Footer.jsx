const Footer = () => {
	return (
		<footer className="footer">
      <div className="footer__social">
        <h3 className="foooter__social__followme">SIGUENOS</h3>
        <a href="https://www.facebook.com/">
          <img src='../img/facebook.png' alt="facebook" />
        </a>
        <a href="https://www.instagram.com/">
          <img src='../img/instagram.png' alt="instagram" />
        </a>
        <a href="https://www.twitter.com/">
          <img src='../img/twitter.png' alt="twitter" />
        </a>
        <a href="https://www.whatsapp.com/">
          <img src='../img/whatsapp.png' alt="linkedin" />
        </a>
      </div>

      <div className="footer__copyright">
        <p>&copy; Copyright 2022</p>
      </div>
    </footer>

	);
};

export default Footer
