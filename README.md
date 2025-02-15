# Portfolio Login and Registration System

This project implements a simple login and registration system, along with a portfolio page. The user can register an account, log in with the registered credentials, view the portfolio, and log out. This project demonstrates the use of local storage for handling authentication in a basic web application.

## Features

- **Login System**: Users can log in using stored credentials.
- **Registration System**: Users can create a new account by registering a username and password.
- **Portfolio Page**: Displays a personalized portfolio page after successful login.
- **Logout Feature**: Users can log out and return to the login page.

## Installation

### 1. Clone the Repository

To get started with this project, clone the repository to your local machine:


git clone https://github.com/22nancy-pixel/my-portfolio


### 2. Open the Project

After cloning the repository, navigate to the project directory and open the `index.html` file in your browser:

cd portfolio-login-system
open index.html


This will open the login page in your default web browser.

## Usage

### 1. **Registration**:
- Navigate to the **Registration Page** by clicking on the "Don't have an account? Register" button on the login page.
- Enter a new username and password and click **Register**.
- Upon successful registration, an alert will display "Registration successful!" and redirect you back to the login page.

### 2. **Login**:
- Enter the username and password you registered with.
- Click the **Login** button.
- If the credentials match the stored ones, you will be redirected to the **Portfolio Page**.
- If the credentials are incorrect, an error message will be displayed.

### 3. **Portfolio**:
- After logging in, you'll be presented with a portfolio containing your personal information, skills, experience, education, and contact information.
- The portfolio is designed as a template and can be customized for a personalized display.

### 4. **Logout**:
- While viewing the portfolio page, click on the **Logout** button.
- You will be logged out and redirected to the login page.

## File Structure

```
portfolio-login-system/
├── index.html           # Main HTML file containing the login, registration, and portfolio pages
├── styles.css           # Custom styles for the project
└── script.js            # JavaScript file for handling the login, registration, and page transitions
```

## Technologies Used

- **HTML5**: Structure and content of the pages.
- **CSS3**: Styling and layout of the pages.
- **JavaScript**: Client-side scripting for form validation, local storage management, and page transitions.
- **localStorage**: Used to store the username and password data for user authentication.

## How to Test

1. **Test Registration**:
   - Click on the "Don't have an account? Register" button.
   - Enter a username and password, then click **Register**.
   - Verify that the registration alert appears and redirects you to the login page.

2. **Test Login**:
   - Enter the registered username and password on the login page.
   - Verify that you are redirected to the portfolio page after clicking **Login**.

3. **Test Invalid Login**:
   - Enter incorrect credentials and click **Login**.
   - Verify that the error message "Invalid username or password" is displayed.

4. **Test Logout**:
   - On the portfolio page, click **Logout**.
   - Verify that you are redirected to the login page.

## Notes

- The authentication system relies on **localStorage**, which stores data on the client side and can be cleared or altered by the user. This is not suitable for production applications, and more secure server-side authentication systems should be used for real applications.
- The portfolio page is a simple template that can be customized by editing the HTML, CSS, and JavaScript files.
- This project is intended for educational purposes and demonstrates basic user authentication techniques in a client-side environment.


