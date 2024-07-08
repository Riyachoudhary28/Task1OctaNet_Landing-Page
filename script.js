// script.js

// Function to create and display the sign-up form in a new window
function showSignUpForm() {
    const signUpPage = window.open('', '_blank');
    signUpPage.document.body.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Sign Up - EcoTravel</title>
            <link rel="stylesheet" href="styles.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
            <style>
                body {
                    font-family: 'Montserrat', sans-serif;
                    background: url('travel4.jpeg') no-repeat center center/cover;
                    color: #333;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .container {
                    max-width: 400px;
                    background: rgba(255, 255, 255, 0.9);
                    padding: 2rem;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h2 {
                    text-align: center;
                    margin-bottom: 2rem;
                }
                .form-group {
                    margin-bottom: 1rem;
                }
                label {
                    display: block;
                    margin-bottom: 0.5rem;
                    font-weight: bold;
                }
                input[type="text"], input[type="email"], input[type="password"] {
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 1rem;
                }
                button {
                    background-color: #1a5276;
                    color: white;
                    border: none;
                    padding: 0.75rem 1rem;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1rem;
                    margin-top: 1rem;
                    transition: background-color 0.3s;
                }
                button:hover {
                    background-color: #154360;
                }
                .error-message {
                    color: red;
                    font-size: 0.8rem;
                    margin-top: 0.5rem;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Sign Up for EcoTravel</h2>
                <form id="signUpForm">
                    <div class="form-group">
                        <label for="signupName">Name:</label>
                        <input type="text" id="signupName" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="signupEmail">Email:</label>
                        <input type="email" id="signupEmail" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="signupPassword">Password:</label>
                        <input type="password" id="signupPassword" name="password" required>
                    </div>
                    <button type="submit" class="btn">Sign Up</button>
                </form>
            </div>

            <script src="script.js"></script>
        </body>
        </html>
    `;

    // Form submission on the sign-up page
    signUpPage.document.getElementById('signUpForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = signUpPage.document.getElementById('signupName').value.trim();
        const email = signUpPage.document.getElementById('signupEmail').value.trim();
        const password = signUpPage.document.getElementById('signupPassword').value.trim();

        if (name === '' || email === '' || password === '') {
            signUpPage.alert('Please fill out all fields.');
            return;
        }

        signUpPage.alert('Thank you for signing up! Check your email for confirmation.');
        signUpPage.close();
    });
}

// Sign Up Button functionality
document.getElementById('signUpBtn').addEventListener('click', function () {
    showSignUpForm();
});

// Book Now button functionality
document.querySelectorAll('.bookBtn').forEach(button => {
    button.addEventListener('click', function () {
        alert('Booking feature is under construction. Stay tuned!');
    });
});

