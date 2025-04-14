import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {  FaAndroid, FaApple, FaReact } from "react-icons/fa";
import { SiFlutter, SiKotlin, SiSwift } from "react-icons/si";

export default function MobileDevelopmentCourse() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Course Header */}
        <div className="bg-gradient-to-r from-purple-800 to-indigo-700 text-white rounded-xl shadow-xl overflow-hidden">
          <div className="px-8 py-12 text-center">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Mobile Development
            </span>
            <h1 className="text-4xl font-bold mb-2">Master Mobile App Development</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Build cross-platform and native mobile apps with industry-standard technologies
            </p>
          </div>
        </div>

        {/* Course Content */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About this course</h2>
              <div className="prose max-w-none text-gray-700">
                <p>
                  Mobile development is the process of creating software applications that run on mobile devices.
                  This course covers both native (iOS/Android) and cross-platform development approaches,
                  teaching you how to build professional-quality mobile apps from scratch.
                </p>
                <p className="mt-4">
                  You&apos;ll learn fundamental concepts, platform-specific development, UI/UX best practices,
                  and how to publish your apps to the App Store and Google Play Store.
                </p>
              </div>
            </section>

            {/* Technologies Section */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Technologies You&apos;ll Learn</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* React Native Card */}
                <div className="border rounded-lg p-4 flex flex-col items-center">
                  <div className="bg-blue-50 p-3 rounded-full mb-3">
                    <FaReact className="text-3xl text-blue-600" />
                  </div>
                  <h3 className="font-semibold">React Native</h3>
                  <p className="text-sm text-gray-600 text-center mt-1">Cross-platform</p>
                </div>
                
                {/* Flutter Card */}
                <div className="border rounded-lg p-4 flex flex-col items-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-3">
                    <SiFlutter className="text-3xl text-blue-800" />
                  </div>
                  <h3 className="font-semibold">Flutter</h3>
                  <p className="text-sm text-gray-600 text-center mt-1">Cross-platform</p>
                </div>
                
                {/* Android Card */}
                <div className="border rounded-lg p-4 flex flex-col items-center">
                  <div className="bg-green-50 p-3 rounded-full mb-3">
                    <FaAndroid className="text-3xl text-green-600" />
                  </div>
                  <h3 className="font-semibold">Android</h3>
                  <p className="text-sm text-gray-600 text-center mt-1">Native</p>
                </div>
                
                {/* iOS Card */}
                <div className="border rounded-lg p-4 flex flex-col items-center">
                  <div className="bg-gray-100 p-3 rounded-full mb-3">
                    <FaApple className="text-3xl text-gray-800" />
                  </div>
                  <h3 className="font-semibold">iOS</h3>
                  <p className="text-sm text-gray-600 text-center mt-1">Native</p>
                </div>
                
                {/* Kotlin Card */}
                <div className="border rounded-lg p-4 flex flex-col items-center">
                  <div className="bg-purple-50 p-3 rounded-full mb-3">
                    <SiKotlin className="text-3xl text-purple-700" />
                  </div>
                  <h3 className="font-semibold">Kotlin</h3>
                  <p className="text-sm text-gray-600 text-center mt-1">Android</p>
                </div>
                
                {/* Swift Card */}
                <div className="border rounded-lg p-4 flex flex-col items-center">
                  <div className="bg-orange-50 p-3 rounded-full mb-3">
                    <SiSwift className="text-3xl text-orange-500" />
                  </div>
                  <h3 className="font-semibold">Swift</h3>
                  <p className="text-sm text-gray-600 text-center mt-1">iOS</p>
                </div>
              </div>
            </section>

            {/* Curriculum Section */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Course Curriculum</h2>
              
              <div className="space-y-4">
                {/* Module 1 */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold">Module 1: Mobile Development Fundamentals</h3>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2"></span>
                      <span>Introduction to mobile platforms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2"></span>
                      <span>Mobile UI/UX principles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2"></span>
                      <span>Setting up development environments</span>
                    </li>
                  </ul>
                </div>
                
                {/* Module 2 */}
                <div className="border-l-4 border-blue-500 pl-4 mt-4">
                  <h3 className="text-lg font-semibold">Module 2: Cross-Platform Development</h3>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2"></span>
                      <span>React Native fundamentals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2"></span>
                      <span>Flutter widgets and state management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2"></span>
                      <span>Building your first cross-platform app</span>
                    </li>
                  </ul>
                </div>
                
                {/* Module 3 */}
                <div className="border-l-4 border-green-500 pl-4 mt-4">
                  <h3 className="text-lg font-semibold">Module 3: Native Android Development</h3>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2"></span>
                      <span>Kotlin basics for Android</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2"></span>
                      <span>Android Studio and Jetpack components</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2"></span>
                      <span>Publishing to Google Play Store</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Code Example */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">React Native Example</h2>
                <button className="text-sm bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors">
                  Try in Snack
                </button>
              </div>
              
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="px-4 py-2 bg-gray-700 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-300 text-sm ml-4">App.js</span>
                </div>
                <pre className="p-4 text-gray-100 overflow-x-auto">
                  <code className="font-mono text-sm">
{`import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Mobile World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;`}
                  </code>
                </pre>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Details */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Course Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Duration</h4>
                  <p className="text-gray-800">8 weeks (recommended pace)</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Level</h4>
                  <p className="text-gray-800">Beginner to Intermediate</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Prerequisites</h4>
                  <p className="text-gray-800">Basic JavaScript knowledge</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Projects</h4>
                  <ul className="text-gray-800 space-y-1 mt-1">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Weather App
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Social Media App
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      E-commerce App
                    </li>
                  </ul>
                </div>
              </div>
              <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-colors">
                Enroll Now
              </button>
            </div>

            {/* Instructor */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Instructor</h3>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Instructor" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Senior Mobile Developer</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-700">
                With over 8 years of experience in mobile development, Sarah has built apps for Fortune 500 companies and startups alike.
              </p>
            </div>

            {/* Resources */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center text-purple-600 hover:text-purple-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    Download Syllabus
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-purple-600 hover:text-purple-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
                    </svg>
                    Mobile Dev Cheat Sheet
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-purple-600 hover:text-purple-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                    Setup Tutorial Videos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}