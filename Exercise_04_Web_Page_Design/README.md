# Exercise 1

**Table of Contents**
[Login Page](#1)

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
