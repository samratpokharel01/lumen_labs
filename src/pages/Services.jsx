import { Monitor, Shield, Code, Lock, Database, PieChart} from 'lucide-react';
import { Link } from 'react-router-dom'


const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="mb-4 text-blue-600" size={48} />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Custom Software Development",
      description: "Tailored solutions designed to meet your unique business needs and streamline operations."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security measures to protect your digital assets and ensure data integrity."
    },
    {
      icon: Code,
      title: "Web Application Development",
      description: "Responsive and user-friendly web applications that engage your audience and drive conversions."
    },
    {
      icon: Lock,
      title: "Identity and Access Management",
      description: "Robust systems to manage user identities and control access to your critical resources."
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Advanced analytics solutions to derive valuable insights from your data and inform decision-making."
    },
    {
      icon: PieChart,
      title: "IT Consulting",
      description: "Expert guidance to align your IT strategy with your business goals and optimize your technology investments."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl mb-8">Comprehensive IT solutions to drive your business forward</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-xl mb-8">We're here to help you address your unique challenges</p>
            
            <Link to='/contact'>
            <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-full inline-flex items-center hover:bg-blue-100 transition duration-300">
              Get in Touch 
            </a>
            </Link>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Services;