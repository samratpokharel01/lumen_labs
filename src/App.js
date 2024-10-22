import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import logo from './images/lumen2.png'

function App() {
  return (

    <Router>
      <div className="container">
        <Header src={logo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/contact" element={<Contact />}  />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
