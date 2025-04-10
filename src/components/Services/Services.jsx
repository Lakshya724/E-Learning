import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { IoBookSharp } from "react-icons/io5";
import { MdAnalytics } from "react-icons/md";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { motion } from "framer-motion";

const ServicesData = [
  { id: 1, title: "All Courses", path: "/courses", icon: <IoBookSharp />, delay: 0.2 },
  { id: 2, title: "Web Development", path: "/WebDev", icon: <TbWorldWww />, delay: 0.2 },
  { id: 3, title: "Mobile Development", path: "/mobile", icon: <CiMobile3 />, delay: 0.3 },
  { id: 4, title: "AI/ML", path: "/ai-ml", icon: <RiComputerLine />, delay: 0.4 },
  { id: 5, title: "Data Science", path: "/data", icon: <MdAnalytics />, delay: 0.5 },
  { id: 6, title: "24/7 Support", path: "/contact", icon: <BiSupport />, delay: 0.7 },
];

const SlideLeft = (delay) => ({
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay, ease: "easeInOut" } },
});

const Services = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">Services we provide</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              onClick={() => navigate(service.path)}
              className="cursor-pointer bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">{service.title}</h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
