"use strict";
const generateResume = () => {
    // Basic Information
    const firstName = document.getElementById("first").value;
    const surName = document.getElementById("sur").value;
    const city = document.getElementById("city").value;
    const postcode = document.getElementById("post-code").value;
    const country = document.getElementById("country").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const profession = document.getElementById("profession").value;
    // Education
    const schoolName = document.getElementById("school-name").value;
    const schoolLocation = document.getElementById("school-location").value;
    const degree = document.getElementById("degree").value;
    const field = document.getElementById("field").value;
    const educationStartDate = document.getElementById("edu-start-date").value;
    const educationEndDate = document.getElementById("edu-end-date").value;
    // Skills 
    const skills = Array.from(document.getElementsByClassName("skillValue"))
        .map(skillInput => skillInput.value);
    // Reference
    const reference = document.getElementById("reference").value;
    // Work Experience
    const jobTitle = document.getElementById("job-title").value;
    const employer = document.getElementById("employer").value;
    const jobLocation = document.getElementById("job-location").value;
    const jobType = document.getElementById("job-type").value;
    const jobStartDate = document.getElementById("job-start-date").value;
    const jobEndDate = document.getElementById("job-end-date").value;
    const jobDescription = document.getElementById("job-description").value;
    const resume = `
    <html>
      <head>
        <title>Resume</title>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
        *{
            margin: 0;
            padding: 0;
            font-family: "Lato", sans-serif;
        }
        html, body {
        overflow-x: hidden;
        }
        .resume-main {
            width: 100%;
            padding: 10px;
            display: flex;
            justify-content: space-between;
        }
        .left {
            width: 20%;
            background-color: #163853;
            display: flex;
            flex-direction: column;
            padding: 50px 50px;
            gap: 50px;
            text-align: left;
        }
        .right {
            width: 80%;
            display: flex;
            flex-direction: column;
            gap: 100px;
            padding: 50px 50px;
        }
        .image {
            border-radius: 50%;
            border: 4px solid white;
        }
        .profile-image {
            border-radius: 50%;
        }
        .contact {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .c-heading {
            font-size: 30px;
            color: white;
            border-bottom: 2px solid white;
        }
        .c-content {
            display: flex;
            flex-direction: column;
            gap: 5px;
            font-size: smaller;
            font-family: "Lato", sans-serif;
            font-weight: 100;
            color: #fff;
        }
        .w-link a {
            color: white;
            text-decoration: none;
        }
        .education {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .e-heading {
            font-size: 30px;
            color: white;
            border-bottom: 2px solid white;
        }
        .e-content {
            display: flex;
            flex-direction: column;
            gap: 20px;
            font-size: smaller;
            font-family: "Lato", sans-serif;
            font-weight: 100;
            color: #fff;
        }
        .college {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        .school {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        .duration {
            font-weight: 500;
        }
        .institute {
            font-weight: 500;
            font-size: 15px;
        }
        .skills {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .s-heading {
            font-size: 30px;
            color: white;
            border-bottom: 2px solid white;
        }
        .s-content {
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-size: smaller;
            font-family: "Lato", sans-serif;
            font-weight: 100;
            color: #fff;
        }
        .language {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .l-heading {
            font-size: 30px;
            color: white;
            border-bottom: 2px solid white;
        }
        .l-content {
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-size: smaller;
            font-family: "Lato", sans-serif;
            font-weight: 100;
            color: #fff;
        }

        /* Right Section Properties */

        .intro {
            display: flex;
            flex-direction: column;
            gap: 8px;
            line-height: 45px;
        }
        .name {
            font-size: 80px;
            letter-spacing: -2px;
            font-weight: bold;
        }
        .profession {
            font-size: 25px;
            font-weight: 500;
            color: gray;
            letter-spacing: -1px;
        }
        .line {
            height: 3px;
            width: 50px;
            background-color: #163853;
            margin-top: -10px;
        }
        .main-content {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .profile {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
        .p-heading {
            font-size: 30px;
            color: #163853;
            border-bottom: 2px solid #163853;
            font-weight: 700;
        }
        .p-content {
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-size: smaller;
            font-weight: 100;
            color: #fff;
        }
        .p-para {
            color: gray;
            font-weight: 400;
        }
        .works {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
        .work-heading {
            font-size: 30px;
            color: #163853;
            border-bottom: 2px solid #163853;
            font-weight: 700;
        }
        .work-content {
            display: flex;
            flex-direction: column;
            gap: 20px;
            font-size: smaller;
            font-weight: 100;
            color: #fff;
        }
        .b-s {
            padding: 0px 5px;
            display: flex;
            flex-direction: column;
        }
        .work-item-heading {
            font-size: 16px;
            color: black;
            font-weight: 400;
        }
        .work-item-desc {
            display: flex;
            flex-direction: column;
            gap: 2px;
            font-weight: 400;
            color: #52525b;
            width: 80%;
            text-align: justify;
        }
        .job-desc {
            color: gray;
            font-size: 14px;
            font-weight: 400;
        }
        .r-heading {
            font-size: 30px;
            color: #163853;
            border-bottom: 2px solid #163853;
            font-weight: 700;
        }
        .r-content {
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-size: smaller;
            font-weight: 100;
            color: #fff;
            padding-top: 10px;
        }
        .r-text {
            font-weight: 400;
            color: gray;
        }
        }
        </style>
        </head>
        <main class="resume-main">
        <!-- Blue OR Left Part -->
        <div class="left">
            <!-- Contact -->
            <div class="contact">
                <div class="c-heading">CONTACT</div>
                <div class="c-content">
                    <div>${phone}</div>
                    <div>${email}</div>
                    <div>${postcode} | ${city}, ${country}</div>
                </div>
            </div>
            <!-- Education -->
            <div class="education">
                <div class="e-heading">EDUCATION</div>
                <div class="e-content">
                    <div class="college">
                        <div class="duration">${educationStartDate}-${educationEndDate}</div>
                        <div class="institute">${schoolName} in ${schoolLocation}</div>
                        <div><li class="field">${degree} in ${field}</li></div>
                    </div>
                </div>
            </div>
            <!-- Skills -->
            <div class="skills">
                <div class="s-heading">SKILLS</div>
                <div class="s-content">
                ${skills.map((skill) => `<div class="skill"><li>${skill}</li></div>`).join('')}
                </div>
            </div>
        </div>
        <!-- White OR Right Part -->
        <div class="right">
            <div class="intro">
                <div class="name">${firstName} ${surName}</div>
                <div class="profession">${profession}</div>
                <div class="line"></div>
            </div>
            <!-- Main Content -->
            <div class="main-content">
            <!-- Projects -->
                <div class="works">
                    <!-- project-heading -->
                    <div class="work-heading">WORK EXPERIENCE</div>
                    <!-- project-content -->
                    <div class="work-content">
                        <div class="b-s">
                            <!-- Name -->
                            <div class="work-item-heading">${jobTitle} at ${employer} in ${jobLocation}</div>
                            <!-- description -->
                            <div class="work-item-desc">
                                <div>${jobStartDate} - ${jobEndDate}</div>
                                <div><li>${jobType}</li></div>
                                <div>${jobDescription}</div>
                            </div>
                        </div>                        
                    </div>
                </div>
                <!-- Reference -->
                <div class="reference">
                    <!-- r-heading -->
                    <div class="r-heading">REFERENCE</div>
                    <!-- r-content -->
                    <div class="r-content">
                        <div class="r-text"><li>${reference}</li></div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    </body>
    </html>
    `;
    document.write(`<html><head><title>Resume</title></head><body>${resume}</body></html>`);
};
