<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot Password</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: #E6DAF0;
        }
        .container {
            width: 100%;
            max-width: 500px;
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        h2 {
            font-size: 28px;
            font-weight: bold;
            color: #000;
            margin-bottom: 20px;
        }
        .input-box {
            position: relative;
            margin: 15px 0;
        }
        input {
            width: 100%;
            padding: 14px;
            border: 2px solid #D4AF65;
            border-radius: 8px;
            font-size: 18px;
            background: white;
            color: black;
        }
        input:focus {
            outline: none;
            border-color: #C49A50;
            box-shadow: 0px 0px 8px rgba(212, 175, 101, 0.5);
        }
        button {
            width: 100%;
            padding: 14px;
            background: #D4AF65;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 20px;
            cursor: pointer;
            font-weight: bold;
            margin-top: 20px;
            transition: 0.3s;
        }
        button:hover {
            background: #C49A50;
        }
        .divider {
            margin: 20px 0;
            border-bottom: 1px solid #6D5D79;
        }
        .back-link {
            font-size: 18px;
            color: black;
        }
        .back-link a {
            text-decoration: none;
            font-weight: bold;
            color: #D4AF65;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Forgot Password</h2>
        
        <p>Please enter your Gmail to receive a password reset link.</p>
        
        <form action="forgotPasswordServlet" method="post">
            <div class="input-box">
                <input type="email" name="email" placeholder="Enter your Gmail" required>
            </div>
            <button type="submit">Send Reset Link</button>
        </form>
        
        <div class="divider"></div>
        
        <p class="back-link">Back to <a href="Login.jsp">Login</a></p>
    </div>
</body>
</html>
