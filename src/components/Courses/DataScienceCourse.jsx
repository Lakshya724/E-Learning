import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaDatabase, FaPython } from "react-icons/fa";
import { SiPandas, SiNumpy, SiTableau, SiJupyter } from "react-icons/si";

export default function DataScienceCourse() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Course Header */}
        <div className="bg-gradient-to-r from-blue-800 to-teal-600 text-white rounded-xl shadow-xl overflow-hidden">
          <div className="px-8 py-12 text-center">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Data Science
            </span>
            <h1 className="text-4xl font-bold mb-2">Data Science Mastery</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Transform raw data into meaningful insights with Python and modern data tools
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
                  Data Science combines statistics, programming, and domain expertise to extract knowledge
                  and insights from structured and unstructured data. This course covers the complete data
                  science pipeline from data collection to deployment.
                </p>
                <p className="mt-4">
                  You&apos;ll learn to use Python for data analysis, build machine learning models, create
                  visualizations, and communicate data-driven insights effectively.
                </p>
              </div>
            </section>

            {/* Technologies Section */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Core Technologies</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Python Card */}
                <div className="border rounded-lg p-4 flex flex-col items-center">
                  <div className="bg-blue-50 p-3 rounded-full mb-3">
                    <FaPython className="text-3xl text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Python</h3>
                  <p className="text-sm text-gray-600 text-center mt-1">Programming</p>
                </div>
                
                {/* Pandas Card */}
                <div className="border rounded-lg p-4 flex flex-col items-center">
                  <div className="bg-green-50 p-3 rounded-full mb-3">
                    <SiPandas className="text-3xl text-green-600" />
                  </div>
                  <h3 className="font-semibold">Pandas</h3>
                  <p className="text-sm text-gray-600 text-center mt-1">Data Manipulation</p>
                </div>
                
                {/* NumPy Card */}
                <div className="border rounded-lg p-4 flex flex-col items-center">
                  <div className="bg-yellow-50 p-3 rounded-full mb-3">
                    <SiNumpy className="text-3xl text-yellow-600" />
                  </div>
                  <h3 className="font-semibold">NumPy</h3>
                  <p className="text-sm text-gray-600 text-center mt-1">Numerical Computing</p>
                </div>
                
                {/* Tableau Card */}
                <div className="border rounded-lg p-4 flex flex-col items-center">
                  <div className="bg-purple-50 p-3 rounded-full mb-3">
                    <SiTableau className="text-3xl text-purple-600" />
                  </div>
                  <h3 className="font-semibold">Tableau</h3>
                  <p className="text-sm text-gray-600 text-center mt-1">Visualization</p>
                </div>
                
                {/* SQL Card */}
                <div className="border rounded-lg p-4 flex flex-col items-center">
                  <div className="bg-red-50 p-3 rounded-full mb-3">
                    <FaDatabase className="text-3xl text-red-600" />
                  </div>
                  <h3 className="font-semibold">SQL</h3>
                  <p className="text-sm text-gray-600 text-center mt-1">Databases</p>
                </div>
                
                {/* Jupyter Card */}
                <div className="border rounded-lg p-4 flex flex-col items-center">
                  <div className="bg-orange-50 p-3 rounded-full mb-3">
                    <SiJupyter className="text-3xl text-orange-600" />
                  </div>
                  <h3 className="font-semibold">Jupyter</h3>
                  <p className="text-sm text-gray-600 text-center mt-1">Notebooks</p>
                </div>
              </div>
            </section>

            {/* Curriculum Section */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Course Curriculum</h2>
              
              <div className="space-y-4">
                {/* Module 1 */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold">Module 1: Data Fundamentals</h3>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2"></span>
                      <span>Python for Data Science</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2"></span>
                      <span>Data Cleaning & Preprocessing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2"></span>
                      <span>Exploratory Data Analysis (EDA)</span>
                    </li>
                  </ul>
                </div>
                
                {/* Module 2 */}
                <div className="border-l-4 border-teal-500 pl-4 mt-4">
                  <h3 className="text-lg font-semibold">Module 2: Statistical Analysis</h3>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2"></span>
                      <span>Descriptive & Inferential Statistics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2"></span>
                      <span>Probability Distributions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2"></span>
                      <span>Hypothesis Testing</span>
                    </li>
                  </ul>
                </div>
                
                {/* Module 3 */}
                <div className="border-l-4 border-green-500 pl-4 mt-4">
                  <h3 className="text-lg font-semibold">Module 3: Machine Learning</h3>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2"></span>
                      <span>Supervised Learning Models</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2"></span>
                      <span>Feature Engineering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2"></span>
                      <span>Model Evaluation Metrics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Code Example */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Data Analysis Example</h2>
                <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                  Open in Colab
                </button>
              </div>
              
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="px-4 py-2 bg-gray-700 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-300 text-sm ml-4">data_analysis.ipynb</span>
                </div>
                <pre className="p-4 text-gray-100 overflow-x-auto">
                  <code className="font-mono text-sm">
{`import pandas as pd
import matplotlib.pyplot as plt

# Load dataset
df = pd.read_csv('sales_data.csv')

# Data cleaning
df = df.dropna()
df['date'] = pd.to_datetime(df['date'])

# Monthly sales analysis
monthly_sales = df.groupby(df['date'].dt.month)['amount'].sum()

# Visualization
plt.figure(figsize=(10,6))
monthly_sales.plot(kind='bar', color='teal')
plt.title('Monthly Sales Performance')
plt.xlabel('Month')
plt.ylabel('Total Sales ($)')
plt.grid(True)
plt.show()`}
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
                  <p className="text-gray-800">10 weeks (recommended pace)</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Level</h4>
                  <p className="text-gray-800">Beginner to Intermediate</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Prerequisites</h4>
                  <p className="text-gray-800">Basic programming knowledge</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Projects</h4>
                  <ul className="text-gray-800 space-y-1 mt-1">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Sales Dashboard
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Customer Segmentation
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Predictive Model
                    </li>
                  </ul>
                </div>
              </div>
              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors">
                Enroll Now
              </button>
            </div>

            {/* Instructor */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Instructor</h3>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/65.jpg" 
                  alt="Instructor" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Dr. Emily Chen</h4>
                  <p className="text-sm text-gray-600">Data Science Lead</p>
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
                Former Data Scientist at Microsoft with 10+ years of experience in analytics and machine learning.
              </p>
            </div>

            {/* Resources */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    Python Data Science Cheat Sheet
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
                    </svg>
                    Sample Datasets Collection
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                    Data Visualization Guide
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