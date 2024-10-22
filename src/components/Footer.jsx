import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Lumen Labs</h3>
          <p className="text-sm">Innovating for a brighter future</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-white hover:text-yellow-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-yellow-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:text-yellow-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-yellow-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p className="text-sm">Biratnagar</p>
          <p className="text-sm">Phone: +977 9702004270</p>
          <p className="text-sm">Email: labslumen@gmail.com</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61567388845421" className="text-white hover:text-yellow-300" aria-label="Follow us on Facebook">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="https://instagram.com/lumen_labs_" className="text-white hover:text-yellow-300" aria-label="Follow us on Instagram">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://twitter.com/lumenlabs" className="text-white hover:text-yellow-300" aria-label="Follow us on Twitter">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="mailto:labslumen@gmail.com" className="text-white hover:text-yellow-300" aria-label="Email us">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-blue-500 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Lumen Labs. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
