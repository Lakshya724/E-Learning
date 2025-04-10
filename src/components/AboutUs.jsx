import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import HeroImg from "/src/assets/a_5.jpg";
import Student1 from "/src/assets/a_2.jpg";
import Student2 from "/src/assets/a_5.jpg";
import Teacher1 from "/src/assets/a_5.jpg";
import Teacher2 from "/src/assets/a_5.jpg";
import Teacher3 from "/src/assets/a_5.jpg";

const AboutUs = () => {
  return (
    <div className="bg-yellow-50 text-gray-800">
      <Navbar />

      {/* Hero Section - Updated to match screenshot */}
      <div className="relative h-[500px] overflow-hidden">
        <img src={HeroImg} alt="About Us" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="max-w-2xl text-xl leading-relaxed mb-8">
            From preschool to bare fertility, our activities enrich the<br />
            innovation and relevant range around empowered to help<br />
            beyond the confine of this glamorous
          </p>
          <Link 
            to="/more-about" 
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-yellow-800 transition duration-300"
          >
            See More
          </Link>
        </div>
      </div>

      {/* Success Section - Updated layout */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Preparing Students to Achieve Success
        </h2>

        {/* Card Section - Updated to match screenshot layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Developing Confident and Successful Learners",
              img: Student1,
              desc: "We think all nutrition workers, such as human neuroblastoma during cognitive studies. Unfortunately, their skill is far off in all scientific laboratories, and yet at",
            },
            {
              title: "Enjoy Learning with a Unique Classroom Experience",
              img: Student2,
              desc: "Upsetin ad nutrition worker, and modern neuroblastoma taken overen's societal behaviour. After all, I have now maintained the education more challenging than ever and",
            },
            {
              title: "Passionate Teachers That Make a Difference",
              img: Student1,
              desc: "Use an academic course, and review your work following an innovative social transformation and a lot of manual",
            },
          ].map((card, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={card.img} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-4">{card.title}</h3>
                <p className="text-gray-600 mb-6">{card.desc}</p>
                <Link 
                  to="/learn-more" 
                  className="inline-block px-6 py-2 bg-yellow-400 text-yellow-900 font-medium rounded hover:bg-yellow-500 transition"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teachers Section - Updated to match screenshot */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Teachers</h2>
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
              {[
                { name: "Mrs. Chem", img: Teacher1 },
                { name: "Miss Smith Ellen", img: Teacher2 },
                { name: "John Carvan", img: Teacher3 },
              ].map((teacher, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img 
                    src={teacher.img} 
                    alt={teacher.name} 
                    className="w-48 h-48 rounded-full object-cover mb-4 border-4 border-yellow-200 shadow-md"
                  />
                  <h3 className="text-xl font-semibold">{teacher.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;