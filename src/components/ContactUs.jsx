import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import { FaHeadphones } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="bg-yellow-50 min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-10">
        We love hearing from our Learners, collaborators, and fellow content lovers. Whether you’ve got feedback, a business proposal, or just want to chat about your favorite movie moment — hit us up!


        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {[1, 2].map((item) => (
            <div key={item} className="border rounded-md p-6 shadow-sm bg-white">
              <div className="flex items-center space-x-4">
                <div className="text-4xl text-black">
                  <FaHeadphones />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Supports</h3>
                  <p className="text-gray-700 text-sm">
                  Would you like a support for something like Technical Issues,any other Suggestions?
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border rounded-md bg-white p-6 shadow-md">
          <form className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-md px-4 py-2 outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your  email"
                className="w-full border rounded-md px-4 py-2 outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message"
                className="w-full border rounded-md px-4 py-2 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white rounded-md py-2 text-lg font-medium hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
