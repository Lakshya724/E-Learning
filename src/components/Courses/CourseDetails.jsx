import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const CourseDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Course Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl shadow-xl overflow-hidden">
          <div className="px-8 py-12 text-center">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Web Development
            </span>
            <h1 className="text-4xl font-bold mb-2">Introduction to HTML & CSS</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Master the fundamentals of web development with this comprehensive course
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
                  Web development is the process of creating and maintaining websites
                  and web applications that run on the internet. It involves frontend
                  development (UI/UX), backend development (server-side logic), and
                  databases to build fully functional web solutions.
                </p>
                <p className="mt-4">
                  This course will take you from zero knowledge to building your first
                  complete website using HTML and CSS, with best practices for modern
                  web development.
                </p>
              </div>
            </section>

            {/* HTML Introduction */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">HTML Introduction</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 mr-3 flex-shrink-0">1</span>
                  <span>HTML stands for Hyper Text Markup Language</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 mr-3 flex-shrink-0">2</span>
                  <span>HTML is the standard markup language for creating Web pages</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 mr-3 flex-shrink-0">3</span>
                  <span>HTML describes the structure of a Web page</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 mr-3 flex-shrink-0">4</span>
                  <span>HTML consists of a series of elements</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 mr-3 flex-shrink-0">5</span>
                  <span>HTML elements tell the browser how to display the content</span>
                </li>
              </ul>
            </section>

            {/* Code Example */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">A Simple HTML Document</h2>
                <button className="text-sm bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors">
                  Try it Yourself »
                </button>
              </div>
              
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="px-4 py-2 bg-gray-700 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-300 text-sm ml-4">index.html</span>
                </div>
                <pre className="p-4 text-gray-100 overflow-x-auto">
                  <code className="font-mono text-sm">
{`<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
</body>
</html>`}
                  </code>
                </pre>
              </div>
            </section>

            {/* Example Explanation */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Example Explained</h2>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800"><code>&lt;!DOCTYPE html&gt;</code></h3>
                  <p className="text-gray-700 mt-1">Defines that this document is an HTML5 document</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800"><code>&lt;html&gt;</code></h3>
                  <p className="text-gray-700 mt-1">The root element of an HTML page</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800"><code>&lt;head&gt;</code></h3>
                  <p className="text-gray-700 mt-1">Contains meta information about the HTML page</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800"><code>&lt;title&gt;</code></h3>
                  <p className="text-gray-700 mt-1">Specifies a title for the HTML page</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800"><code>&lt;body&gt;</code></h3>
                  <p className="text-gray-700 mt-1">Defines the document&apos;s body and visible contents</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Course Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Duration</h4>
                  <p className="text-gray-800">4 weeks</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Level</h4>
                  <p className="text-gray-800">Beginner</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Prerequisites</h4>
                  <p className="text-gray-800">None</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Includes</h4>
                  <ul className="text-gray-800 space-y-1 mt-1">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Hands-on exercises
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Quizzes
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Certificate
                    </li>
                  </ul>
                </div>
              </div>
              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors">
                Enroll Now
              </button>
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
                    Download Course PDF
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                    </svg>
                    Share this Course
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                    Course Syllabus
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
};

export default CourseDetails;