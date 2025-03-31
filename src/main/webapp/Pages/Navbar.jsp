<!DOCTYPE html>
<html>
<head>
    <title>Skill_Elevate</title>
  <link rel="stylesheet" type="text/css" href="style.css">
    <style>
       /* Reset styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body styling */
body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    margin: 0;
    
}

/* Navbar styling */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: #f2f2f2;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
}

/* Logo styling */
.logo {
    font-size: 24px;
    font-weight: bold;
    white-space: nowrap; /* Prevents breaking */
}

/* Navigation links */
.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
    flex-wrap: wrap; /* Allows links to wrap if needed */
}

.nav-links li {
    display: inline;
}

.nav-links a {
    text-decoration: none;
    color: black;
    font-size: 16px;
    padding: 8px 12px;
}

/* Responsive design */
@media screen and (max-width: 768px) {
    .navbar {
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }

    .nav-links {
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        gap: 10px;
    }

    .nav-links a {
        font-size: 14px;
        padding: 6px 10px;
    }
}

    </style>
</head>
<body>

    <div class="navbar">
        <div class="logo">Skill_<b>Elevate</b></div>
        <ul class="nav-links">
            <li><a href="Index.jsp">Home</a></li>
            <li><a href="Select.jsp">Courses</a></li>
            <li><a href="About.jsp">About Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="Contact.jsp">Contact Us</a></li>
        </ul>
    </div>

</body>
</html>
