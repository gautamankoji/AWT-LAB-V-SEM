# Exercise 3

**Table of Contents**
[Student Academic Info](#1)
[Training and Placement Details](#2)
[Student Chapters](#3)

<h2 id="1">Student Academic Info</h2>
<div align="center">
    <img src="./screenshots/student_academics_info.png" alt="Student Academic Info">
</div>

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Educational Institution | Student Info</title>
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
        <div class="hero_img"><img src="./assets/header_banner.png" width="900" /></div>
    </header>
    <nav class="nav">
        <div>About Institution</div>
        <ul class="nav_items">
            <a href="/about">About Us ▾</a>
            <a href="/governance">Governance ▾</a>
            <a href="/academics">Academics ▾</a>
            <a href="/departments">Departments ▾</a>
            <a href="/placements">Placements ▾</a>
            <a href="/examinations">Examinations ▾</a>
            <a href="/facilities">Facilities ▾</a>
            <a href="/campus-life">Campus Life ▾</a>
            <a href="/cells">Cells ▾</a>
        </ul>
    </nav>
    <main>
        <div class="breadcrumb">
            <a href="#">Home</a><span>/</span>
            <a href="#">Academics</a><span>/</span>
            <a href="#">Computer Science and Engineering</a><span>/</span>
            <span>Student Academics Info</span>
        </div>
        <h1>Student Academics Info</h1>
        <form class="student_form">
            <div>
                <h2>Academic Record</h2>
                <label>
                    Enrollment Number:
                    <input type="text" name="enrollmentNumber" required>
                </label>
                <label>
                    Year of Study:
                    <select name="yearOfStudy" required>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                    </select>
                </label>
                <label>
                    Current GPA:
                    <input type="number" step="0.01" name="currentGPA"
                        required>
                </label>
                <label>
                    Backlogs (if any):
                    <input type="number" name="backlogs">
                </label>
            </div>
            <div>
                <h2>Courses and Grades</h2>
                <label>
                    List of Courses (e.g., Data Structures, Operating Systems):
                    <textarea name="courses" rows="3"
                        required></textarea>
                </label>
                <label>
                    Average Grades (separate by commas, e.g., A, B+, B):
                    <input type="text" name="grades">
                </label>
            </div>
            <div>
                <h2>Project Work</h2>
                <label>
                    Project Title:
                    <input type="text" name="projectTitle">
                </label>
                <label>
                    Project Description:
                    <textarea name="projectDescription"
                        rows="4"></textarea>
                </label>
                <label>
                    Technologies Used:
                    <input type="text" name="technologies">
                </label>
                <label>
                    Project Link (if available):
                    <input type="url" name="projectLink">
                </label>
            </div>
            <div>
                <h2>Extracurricular Activities</h2>
                <label>
                    List of Activities (e.g., Coding Club, Sports):
                    <textarea name="activities" rows="3"></textarea>
                </label>
                <label>
                    Achievements (if any):
                    <textarea name="achievements" rows="3"></textarea>
                </label>
            </div>
            <button type="submit" class="submit_btn">
                Submit
            </button>
        </form>
    </main>
</body>
</html>
```

<h2 id="2">Training and Placement Details</h2>
<div align="center">
    <img src="./screenshots/t&p_details.png" alt="Training and Placement Details">
</div>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Educational Institution | Student Chapters</title>
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
        <div class="hero_img"><img src="./assets/header_banner.png" width="900" /></div>
    </header>
    <nav class="nav">
        <div>About Institution</div>
        <ul class="nav_items">
            <a href="/about">About Us ▾</a>
            <a href="/governance">Governance ▾</a>
            <a href="/academics">Academics ▾</a>
            <a href="/departments">Departments ▾</a>
            <a href="/placements">Placements ▾</a>
            <a href="/examinations">Examinations ▾</a>
            <a href="/facilities">Facilities ▾</a>
            <a href="/campus-life">Campus Life ▾</a>
            <a href="/cells">Cells ▾</a>
        </ul>
    </nav>
    <main>
        <div class="breadcrumb">
            <a href="#">Home</a><span>/</span>
            <a href="#">Training and Placement</a><span>/</span>
            <span>T&P Details</span>
        </div>
        <h1>Training and Placement Achievements (2019-23)</h1>
        <section>
            <h2>Placement Achievements</h2>
            <p class="mb-6">Our students have been successfully placed in renowned companies with competitive salary
                packages. Below are some of the companies and the number of students placed:</p>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Highest Package (LPA)</th>
                            <th>Students Placed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Amazon</td>
                            <td>22 LPA</td>
                            <td>33</td>
                        </tr>
                        <tr>
                            <td>Infosys</td>
                            <td>9.5 LPA</td>
                            <td>60</td>
                        </tr>
                        <tr>
                            <td>Tech Mahindra</td>
                            <td>3.8 LPA</td>
                            <td>77</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section>
            <h2>Top Recruiters</h2>
            <p>Our top recruiters include some of the leading companies in various industries:</p>
            <ul class="company_list">
                <li>Amazon</li>
                <li>Infosys</li>
                <li>Cisco</li>
                <li>HCL</li>
                <li>TCS</li>
                <li>Deloitte</li>
                <li>Accenture</li>
                <li>Tech Mahindra</li>
            </ul>
        </section>
        <section>
            <h2>Student Resources</h2>
            <p>Our T&P cell provides numerous resources to support student success, including:</p>
            <ul class="list">
                <li>Resume Building Workshops</li>
                <li>Mock Interviews and Interview Prep Sessions</li>
                <li>Technical and Soft Skills Training</li>
                <li>Guidance on Higher Education and Competitive Exams</li>
                <li>One-on-One Counseling</li>
            </ul>
        </section>
        <section class="bg-white p-6 rounded-lg border border-gray-300">
            <h2>Contact Us</h2>
            <p>If you have questions or need assistance, feel free to contact the Training and Placement cell:</p>
            <p><span>Email:</span> dean_tp@vignaniit.edu.in</p>
            <p><span>Phone:</span> +91 98663 99942</p>
            <p><span>Office Hours:</span> Monday - Friday, 9:00 AM - 5:00 PM</p>
            <h3>Contact Person</h3>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="">
                        <td>1</td>
                        <td>Dr B. Prasad</td>
                        <td>Dean - Training & Placements, Internships</td>
                        <td>9866399942 / 8125663333 / 7093098775</td>
                        <td>dean_tp@vignaniit.edu.in</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </main>
</body>
</html>
```

<h2 id="3">Student Chapters</h2>
<div align="center">
    <img src="./screenshots/student_chapters.png" alt="Student Chapters">
</div>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Educational Institution | Student Chapters</title>
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
        <div class="hero_img"><img src="./assets/header_banner.png" width="900" /></div>
    </header>
    <nav class="nav">
        <div>About Institution</div>
        <ul class="nav_items">
            <a href="/about">About Us ▾</a>
            <a href="/governance">Governance ▾</a>
            <a href="/academics">Academics ▾</a>
            <a href="/departments">Departments ▾</a>
            <a href="/placements">Placements ▾</a>
            <a href="/examinations">Examinations ▾</a>
            <a href="/facilities">Facilities ▾</a>
            <a href="/campus-life">Campus Life ▾</a>
            <a href="/cells">Cells ▾</a>
        </ul>
    </nav>
    <main>
        <div class="breadcrumb">
            <a href="#">Home</a><span>/</span>
            <span>Student Chapters</span>
        </div>
        <h1>Student Chapters</h1>
        <div class="student_chapters">
            <div class="card">
                <h2>Algozenith VIIT Club</h2>
            </div>
            <div class="card">
                <h2>GDGC VIIT Club</h2>
            </div>
            <div class="card">
                <h2>YUVA Club</h2>
            </div>
            <div class="card">
                <h2>ED Cell</h2>
            </div>
            <div class="card">
                <h2>Media Cell</h2>
            </div>
            <div class="card">
                <h2>NSS Unit</h2>
            </div>
            <div class="card">
                <h2>Green Club</h2>
            </div>
            <div class="card">
                <h2>Idea Lab</h2>
            </div>
            <div class="card">
                <h2>Skill Development Lab</h2>
            </div>
            <div class="card">
                <h2>Student Activity Council</h2>
            </div>
            <div class="card">
                <h2>Research Cell</h2>
            </div>
            <div class="card">
                <h2>Discipline Cell</h2>
            </div>
            <div class="card">
                <h2>WEP Cell</h2>
            </div>
            <div class="card">
                <h2>IIC Cell</h2>
            </div>
            <div class="card">
                <h2>IPR Cell</h2>
            </div>
            <div class="card">
                <h2>International Student Cell</h2>
            </div>
            <div class="card">
                <h2>IEEE Chapter</h2>
            </div>
        </div>
    </main>
</body>
</html>
```