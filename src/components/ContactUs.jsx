import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We love hearing from our learners, collaborators, and fellow content lovers. 
            Whether you&apos;ve got feedback, a business proposal, or just want to chat — we&apos;re here for you!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Support Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-4 rounded-full mb-4">
                <MdSupportAgent className="text-3xl text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <p className="text-gray-600 mb-4">
                Need help with technical issues or have suggestions?
              </p>
              <a href="mailto:support@example.com" className="text-indigo-600 font-medium hover:underline">
                Contact Support
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <FaEnvelope className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">
                For general inquiries and partnerships
              </p>
              <a href="mailto:hello@example.com" className="text-blue-600 font-medium hover:underline">
                hello@example.com
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <FaPhoneAlt className="text-3xl text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Available Monday-Friday, 9am-5pm
              </p>
              <a href="tel:+1234567890" className="text-green-600 font-medium hover:underline">
                +1 (234) 567-890
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <FaMapMarkerAlt className="text-3xl text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">
                Our headquarters location
              </p>
              <address className="text-yellow-600 font-medium not-italic">
                123 Learning St, Edu City
              </address>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Form Section */}
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Your message here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            {/* Info Section */}
            <div className="md:w-1/3 bg-indigo-50 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                    <FaEnvelope className="text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Email</h4>
                    <a href="mailto:hello@example.com" className="text-gray-900 hover:text-indigo-600">
                      hello@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                    <FaPhoneAlt className="text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-900 hover:text-indigo-600">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Address</h4>
                    <address className="text-gray-900 not-italic">
                      123 Learning Street<br />
                      Edu City, EC 12345<br />
                      United States
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                    <a 
                      key={social} 
                      href="#" 
                      className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
                      aria-label={social}
                    >
                      <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}