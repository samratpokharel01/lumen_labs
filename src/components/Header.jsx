import { Link } from 'react-router-dom';

const Header = ({ src }) => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/' className="flex items-center">
          <img 
            src={src} 
            alt="Lumen Labs Logo" 
            className="h-15 w-auto max-w-[200px] object-contain" 
          />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to='/' className="hover:text-yellow-300">
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' className="hover:text-yellow-300">
                About
              </Link>
            </li>
            <li>
              <Link to='/services' className="hover:text-yellow-300">
                Services
              </Link>
            </li>
            <li>
              <Link to='/contact' className="hover:text-yellow-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;