import { ArrowRight, Monitor, Shield, Code } from 'lucide-react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Innovative IT Solutions for Your Business</h2>
            <p className="text-xl mb-8">Empowering your digital transformation journey</p>
            <Link to='/services'>
            <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition duration-300">
              Get Started <ArrowRight className="ml-2" />
            </a>
            </Link>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Monitor className="mx-auto mb-4 text-blue-600" size={48} />
                <h3 className="text-xl font-semibold mb-2">Custom Software Development</h3>
                <p>Tailored solutions to meet your unique business needs</p>
              </div>
              <div className="text-center">
                <Code className="mx-auto mb-4 text-blue-600" size={48} />
                <h3 className="text-xl font-semibold mb-2">Web Application Development</h3>
                <p>Responsive and user-friendly web applications</p>
              </div>
              <div className="text-center">
                <Shield className="mx-auto mb-4 text-blue-600" size={48} />
                <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
                <p>Protecting your digital assets with advanced security measures</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">Let's discuss how Lumen Labs can help you achieve your goals</p>
            
            <Link to='/contact'>
            <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-full inline-flex items-center hover:bg-blue-100 transition duration-300">
              Contact Us <ArrowRight className="ml-2" />
            </a>
            </Link>
          </div>
        </section>
      </main>


    </div>
  );
};

export default Home;