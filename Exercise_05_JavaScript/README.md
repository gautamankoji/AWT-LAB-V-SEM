# Exercise 1

<div>Table of Contents</div>
<a href"#1">Login Page</a>
<a href"#2">Registration Page</a>

<h2 id="1">Login Page</h2>
<div align="center">
    <img src="./screenshots/login_page.png" alt="Login Page">
</div>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Educational Institution | Login</title>
    <link rel="stylesheet" href="styles.css">
    <script>
        function validateForm(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            let isValid = true;
            let errorMessage = '';
            if (!emailPattern.test(email)) {
                isValid = false;
                errorMessage += 'Please enter a valid email address.\n';
            }
            if (!passwordPattern.test(password)) {
                isValid = false;
                errorMessage += 'Password must be at least 8 characters long and contain at least one letter and one number.\n';
            }
            if (isValid) {
                alert('Form submitted successfully!');
            } else {
                alert(errorMessage);
            }
        }
    </script>
</head>
<body>
    <header>
        <div>Vignan's IIT | Visakhapatnam</div>
        <ul class="h_items">
            <a href="/aicte">AICTE</a>
            <a href="/ugc">UGC</a>
            <a href="/nba">NBA</a>
            <a href="/naac">NAAC</a>
            <a href="/nirf">NIRF</a>
            <a href="/e-gov">e-Gov</a>
            <a href="/ecap">ECAP</a>
            <a href="/v-wms">V-WMS</a>
            <a href="/feedback"><span>*</span> Stakeholders - feedback</a>
        </ul>
    </header>
    <main class="login_page">
        <div>
            <img src="./assets/landscape_vignan.png" alt="vignan landscape" class="hero_img">
            <div>Vignan Institute of Information Technology</div>
        </div>
        <div class="login_card">
            <div class="clg_title">
                <img src="./assets/vignan_logo.png" alt="Vignan Logo">
                <span>Vignan IIT</span>
            </div>
            <div>Welcome Back</div>
            <div class="select_user">
                <button>Student</button>
                <button>Faculty</button>
                <button>Alumni</button>
                <button>Parent</button>
            </div>
            <form action="validateForm(event)" method="POST" class="login_form">
                <div>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email">
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password">
                </div>
                <div>
                    <label>
                        <input type="checkbox">
                        <span>Remember Me</span>
                    </label>
                    <a href="#">Forgot Password?</a>
                </div>
                <div class="login_btn"><button type="submit">Login</button></div>
            </form>
            <div>
                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                <div>
                    <a href="/terms">Terms of Service</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>
            </div>
        </div>
    </main>
</body>
</html>
```

<h2 id="2">Registration Page</h2>
<div align="center">
    <img src="./screenshots/registration_page.png" alt="Registration Page">
</div>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Educational Institution | Sign Up</title>
    <script>
        function validateForm(event) {
            event.preventDefault(); 
            const fullName = document.getElementById('full-name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const role = document.getElementById('role').value;
            const nameRegex = /^[a-zA-Z\s]{2,50}$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^\d{10}$/;
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            let errors = [];
            if (!nameRegex.test(fullName)) {
                errors.push("Full Name must be 2-50 characters long and can only contain letters and spaces.");
            }
            if (!emailRegex.test(email)) {
                errors.push("Please enter a valid email address.");
            }
            if (phone && !phoneRegex.test(phone)) {
                errors.push("Phone number must be exactly 10 digits.");
            }
            if (!passwordRegex.test(password)) {
                errors.push("Password must be at least 8 characters long and contain letters and numbers.");
            }
            if (password !== confirmPassword) {
                errors.push("Passwords do not match.");
            }
            if (!role) {
                errors.push("Please select a role.");
            }
            if (errors.length > 0) {
                alert(errors.join("\n"));
            } else {
                alert("Registration successful!");
            }
        }
    </script>
</head>
<body>
    <header>
        <div>Vignan's IIT | Visakhapatnam</div>
        <ul class="h_items">
            <a href="/aicte">AICTE</a>
            <a href="/ugc">UGC</a>
            <a href="/nba">NBA</a>
            <a href="/naac">NAAC</a>
            <a href="/nirf">NIRF</a>
            <a href="/e-gov">e-Gov</a>
            <a href="/ecap">ECAP</a>
            <a href="/v-wms">V-WMS</a>
            <a href="/feedback"><span>*</span> Stakeholders - feedback</a>
        </ul>
    </header>
    <main class="registration_page">
        <div>
            <img src="./assets/landscape_vignan.png" alt="vignan landscape" class="hero_img">
            <div>Vignan Institute of Information Technology</div>
        </div>
        <div class="registration_card">
            <div class="clg_title">
                <img src="./assets/vignan_logo.png" alt="Vignan Logo">
                <span>Vignan IIT</span>
            </div>
            <div>Create an Account</div>
            <form action="validateForm(event)" method="POST" class="signup_form">
                <div>
                    <label for="full-name">Full Name</label>
                    <input type="text" id="full-name" name="full-name" placeholder="Enter your full name" required>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required>
                </div>
                <div>
                    <label for="phone">Phone Number (optional)</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter your phone number">
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required>
                </div>
                <div>
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required>
                </div>
                <div>
                    <label for="role">Role</label>
                    <select id="role" name="role" required>
                        <option value="student">Student</option>
                        <option value="faculty">Faculty</option>
                        <option value="alumni">Alumni</option>
                        <option value="parent">Parent</option>
                    </select>
                </div>
                <div class="submit_btn">
                    <button type="submit">Register</button>
                </div>
            </form>
            <div>
                <p>Already have an account?<a href="/login">Login</a></p>
                <div><a href="/terms">Terms of Service</a><a href="/privacy">Privacy Policy</a></div>
            </div>
        </div>
    </main>
</body>
</html>
```
