import { Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow">
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">About Lumen Labs</h2>
            <p className="text-xl mb-8">Illuminating the path to digital excellence since 2010</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="mb-4">Lumen Labs was founded in 2010 by a group of passionate technologists who saw the need for innovative IT solutions in a rapidly evolving digital landscape. Starting as a small consultancy, we've grown into a full-service IT company, serving clients across various industries.</p>
              <p>Our journey has been marked by continuous learning, adaptation, and a commitment to excellence. Today, we're proud to be at the forefront of digital transformation, helping businesses harness the power of technology to achieve their goals.</p>
            </div>
          </div>
        </section>

        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Our Team</h3>
                <p>A diverse group of experts dedicated to your success</p>
              </div>
              <div className="text-center">
                <Target className="mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p>To empower businesses through innovative technology solutions</p>
              </div>
              <div className="text-center">
                <Award className="mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p>Innovation, integrity, and client-centricity guide everything we do</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8 text-center">Our Leadership</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Jane Doe", title: "CEO & Founder" },
                { name: "John Smith", title: "CTO" },
                { name: "Emily Johnson", title: "COO" }
              ].map((leader, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h4 className="text-xl font-semibold">{leader.name}</h4>
                  <p>{leader.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default About;