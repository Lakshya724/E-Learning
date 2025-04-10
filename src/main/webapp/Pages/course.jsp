<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skill_Elevate - Courses</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            background-color: #f8f8e8;
            text-align: center;
            padding-top:50px;
       
        }

        .hero {
        
            width: 100%;
		    height: 400px; /* Adjust based on requirement */
		    background-image: url('Images/ab_0.jpg'); /* Update the correct path */
		    background-size: cover;
		    background-position: center;
		    
        }
        .hero img {
		    width: 100%;
		    height: auto;
		    display: block;
}
        
        
        .tagline {
            font-size: 18px;
            font-weight: bold;
            color: #8b8b8b;
            margin: 10px 0;
        }

        .tagline span {
            color: red;
        }

        .course-title {
            font-size: 22px;
            font-weight: bold;
            margin: 20px 0;
        }

        .categories {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-bottom: 20px;
        }

        .category {
            background-color: #a3c5ff;
            padding: 15px 30px;
            border-radius: 20px;
            font-weight: bold;
            cursor: pointer;
        }

        .course-grid {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }

        .course-card {
            background-color: #c1d3ff;
            border-radius: 10px;
            width: 250px;
            padding: 10px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .course-card img {
            width: 100%;
            height: 140px;
            border-radius: 10px;
        }

        .course-card h3 {
            font-size: 16px;
            margin: 8px 0;
        }

        .course-card p {
            font-size: 14px;
            color: #444;
        }

        .rating {
            font-size: 16px;
            font-weight: bold;
        }

        .free-badge {
            display: inline-block;
            background-color: blue;
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 14px;
            margin-top: 5px;
        }
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 100px;
            box-sizing: border-box;
            overflow-x: hidden;
        }

        header {
            background-color: #f8f9fa;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            animation: fadeInDown 1s ease;
        }

        nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
        }

        nav ul li {
            margin-right: 20px;
        }

        nav ul li a {
            text-decoration: none;
            color: #333;
            transition: color 0.3s;
        }

        nav ul li a:hover {
            color: #ff5722;
        }

        .hero {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            padding: 50px;
            background-color: #f3f4f6;
            animation: fadeIn 1.5s ease;
        }

        .hero-content {
            max-width: 50%;
            margin-left:150px;
        }

        .hero-content h1 {
            font-size: 36px;
            color: #333;
        }

        .hero-content p {
            font-size: 18px;
            color: #555;
        }

        .hero-content button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            margin-right: 10px;
            
            cursor: pointer;
            transition: transform 0.3s, background-color 0.3s;
        }

        .btn-primary {
            background-color: #ff5722;
            color: white;
        }

        .btn-primary:hover {
            transform: scale(1.1);
            background-color: #e64a19;
        }

        .btn-secondary {
            background-color: #6200ea;
            color: white;
        }

        .btn-secondary:hover {
            transform: scale(1.1);
            background-color: #3700b3;
        }

        .services {
            text-align: center;
            padding: 50px 20px;
            background-color: #fff;
            animation: fadeInUp 1.5s ease;
          
            
        }

        .services h2 {
            font-size: 28px;
            margin-bottom: 20px;

        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 20px;

        }

        .service-item {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;

        }

        .service-item:hover {
            transform: translateY(-10px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
            
        }

        .testimonials {
            text-align: center;
            padding: 50px;
            background-color: #f3f4f6;
            animation: fadeIn 1.5s ease;
        }

        .testimonials h2 {
            margin-bottom: 20px;
        }

        .testimonials p {
            font-size: 18px;
            margin-bottom: 30px;
        }

        .testimonials-grid {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
        }

        .testimonial-item {
            width: 200px;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .testimonial-item:hover {
            transform: translateY(-10px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .community {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            padding: 50px;
            background-color: #fff;
            animation: fadeIn 1.5s ease;
        }

        .community-content {
            max-width: 50%;
        }

        .community-content h2 {
            font-size: 28px;
            color: #333;
        }

        .community-content p {
            font-size: 16px;
            color: #555;
            margin-bottom: 20px;
        }

        .community-content button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            background-color: #ff5722;
            color: white;
            cursor: pointer;
            transition: transform 0.3s, background-color 0.3s;
        }

        .community-content button:hover {
            transform: scale(1.1);
            background-color: #e64a19;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (max-width: 768px) {
            .hero {
                flex-direction: column;
                text-align: center;
            }

            .hero-content {
                max-width: 100%;
            }

            .services-grid {
                grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

            }

            .testimonials-grid {
                flex-direction: column;
            }

            .community {
                flex-direction: column;
                text-align: center;
            }

            .community-content {
                max-width: 100%;
            }
        }
     
    .hero-section {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 50px;
            background-color: white;
        }

        /* Left: Hero Image */
        .hero-image {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .hero-image img {
            max-width: 400px;
            border-radius: 10px;
        }

        /* Right: Hero Content */
        .hero-content {
            flex: 1;
            max-width: 500px;
            margin-left: 220px;
        }

        .hero-content h1 {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 15px;
        }

        .hero-content p {
            font-size: 16px;
            color: #555;
            margin-bottom: 20px;
        }

        /* Features Section */
        .features {
            margin-top: 20px;
            margin-left: 100px;
        }

        .feature-card {
            display: flex;
            align-items: center;
            background: #fff;
            padding: 12px;
            border-radius: 10px;
            border: 2px solid #FFD700;
            margin-bottom: 10px;
            width: 300px;
            transition: 0.3s ease-in-out;
        }

        .feature-card:hover {
            background: #fff9c4;
        }

        .feature-card img {
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }

        .feature-card span {
            font-size: 14px;
            font-weight: bold;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .hero-section {
                flex-direction: column;
                text-align: center;
            }

            .hero-content {
                margin-left: 0;
                margin-top: 30px;
            }
            
        }
        .services {
            padding: 20px;
            
            
        }
        .services h2 {
            font-size: 24px;
            margin-bottom: 20px;
           
        }
        .services-grid {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            
        }
        .service-item {
            background: #e0e0e0;
            padding: 20px;
            width: 150px;
            text-align: center;
            border-radius: 10px;

        }
        
        .service-item img {
            width: 50px;
            height: 50px;
            margin-bottom: 10px;
        
        }
    </style>
</head>
<body>

<jsp:include page="Navbar.jsp"></jsp:include>

    <div class="hero"></div>
    <p class="tagline">India's Most Loved Coding Community <span>❤️</span></p>

    <h2 class="course-title">All Courses</h2>
    <section class="services">
    <h2>Courses We Provide</h2>
    <div class="services-grid">
        <div class="service-item">
            <a href="course.jsp">
                <img src="Images/Allcourse.png" alt="All Courses">
                <p>All Courses</p>
            </a>
        </div>
        
        <div class="service-item">
            <a href="Web.jsp">
                <img src="Images/web1.png" alt="Web Development">
                <p>Web Development</p>
            </a>
        </div>

        <div class="service-item">
            <a href="Mobile.jsp">
                <img src="Images/mobile1.png" alt="Mobile Development">
                <p>Mobile Development</p>
            </a>
        </div>

        <div class="service-item">
            <a href="AIML.jsp">
                <img src="Images/ai-ml1.jpg" alt="AI/ML">
                <p>AI/ML</p>
            </a>
        </div>

        <div class="service-item">
            <a href="Datascience.jsp">
                <img src="Images/Data1.png" alt="Data Science">
                <p>Data Science</p>
            </a>
        </div>
    </div>
</section>
   

    <div class="course-grid">
     <div class="course-card">
            <img src="Images/Img1.jpg" alt="Course Image">
            <h3>Html Complete Basic Level:Learn Different Tags & more</h3>
           <p><b>Prof. Nikunj Vadher</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>
        
  <div class="course-card">
            <img src="Images/img2.png" alt="Course Image">
            <h3>Html Complete Average Level: Learn about building websites & more</h3>
          <p><b>Prof. Nikunj Vadher</b></p>
   <br>
      
            <span class="free-badge">Free Learning</span>
        </div>
          <div class="course-card">
            <img src="Images/img3.png" alt="Course Image">
            <h3>Html Complete Advance Level:Learn Real time website building & more</h3>
            <p><b>Prof. Nikunj Vadher</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>
          <div class="course-card">
            <img src="Images/img4.png" alt="Course Image">
            <h3>Complete CSS:Learn Begineers to advance level & more</h3>
           <p><b>Prof. Nikunj Vadher</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>
          <div class="course-card">
            <img src="Images/img5.png" alt="Course Image">
            <h3>Complete  Javascript :Learn Begineers level to advance & more</h3>
            <p><b>Prof. Nikunj Vadher</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>
          <div class="course-card">
            <img src="Images/img6.png" alt="Course Image">
            <h3>Complete React: Learn Begineers level to advance & more </h3>
             <p><b>Prof. Nikunj Vadher</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>
        
          <div class="course-card">
            <img src="Images/img7.png" alt="Course Image">
            <h3>Introduction to Mobile App Development & more</h3>
            <p><b>Prof. Pervez Belim</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>
         <div class="course-card">
            <img src="Images/img8.png" alt="Course Image">
            <h3>Introduction to Mobile App Development & more</h3>
            <p><b>Prof. Pervez Belim</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>         
        
        
        <div class="course-card">
            <img src="Images/img9.png" alt="Course Image">
            <h3>Introduction to Mobile App Development & more</h3>
            <p><b>Prof. Pervez Belim</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>
        <div class="course-card">
            <img src="Images/img10.png" alt="Course Image">
            <h3>Introduction to Mobile App Development & more</h3>
            <p><b>Prof. Pervez Belim</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>
        <div class="course-card">
            <img src="Images/img11.png" alt="Course Image">
            <h3>Introduction to Mobile App Development & more</h3>
            <p><b>Prof. Pervez Belim</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>
        <div class="course-card">
            <img src="Images/img12.png" alt="Course Image">
            <h3>Introduction to Mobile App Development & more</h3>
            <p><b>Prof. Pervez Belim</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>
        
        
        
        
        <div class="course-card">
            <img src="Images/img13.png" alt="Course Image">
            <h3>Introduction to Mobile App Development & more</h3>
            <p><b>Prof. Pervez Belim</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>
         <div class="course-card">
            <img src="Images/img14.png" alt="Course Image">
            <h3>Introduction to Mobile App Development & more</h3>
            <p><b>Prof. Pervez Belim</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>         
        
        
        <div class="course-card">
            <img src="Images/img15.png" alt="Course Image">
            <h3>Introduction to Mobile App Development & more</h3>
            <p><b>Prof. Pervez Belim</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>
        <div class="course-card">
            <img src="Images/img16.png" alt="Course Image">
            <h3>Introduction to Mobile App Development & more</h3>
            <p><b>Prof. Pervez Belim</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>
        <div class="course-card">
            <img src="Images/img17.png" alt="Course Image">
            <h3>Introduction to Mobile App Development & more</h3>
            <p><b>Prof. Pervez Belim</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>
        <div class="course-card">
            <img src="Images/img18.png" alt="Course Image">
            <h3>Introduction to Mobile App Development & more</h3>
            <p><b>Prof. Pervez Belim</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>
        
        
        <div class="course-card">
            <img src="Images/img19.png" alt="Course Image">
            <h3>Introduction to Mobile App Development & more</h3>
            <p><b>Prof. Pervez Belim</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>
         <div class="course-card">
            <img src="Images/img20.jpg" alt="Course Image">
            <h3>Introduction to Mobile App Development & more</h3>
            <p><b>Prof. Pervez Belim</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>         
        
        
        <div class="course-card">
            <img src="Images/img21.png" alt="Course Image">
            <h3>Introduction to Mobile App Development & more</h3>
            <p><b>Prof. Pervez Belim</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>
        <div class="course-card">
            <img src="Images/img13.png" alt="Course Image">
            <h3>Introduction to Mobile App Development & more</h3>
            <p><b>Prof. Pervez Belim</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>
        <div class="course-card">
            <img src="Images/img23.png" alt="Course Image">
            <h3>Introduction to Mobile App Development & more</h3>
            <p><b>Prof. Pervez Belim</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>
        <div class="course-card">
            <img src="Images/img24.png" alt="Course Image">
            <h3>Introduction to Mobile App Development & more</h3>
            <p><b>Prof. Pervez Belim</b></p>
   <br>
            <span class="free-badge">Free Learning</span>
        </div>
        
        
       
    </div>
    
    <jsp:include page="learners.jsp"/>
    
    <jsp:include page="Footer.jsp"></jsp:include>

    
    

</body>
</html>
