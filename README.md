# portfolio
A sleek and responsive personal portfolio website showcasing my skills, projects, education, and contact details. Built using HTML, CSS, and JavaScript, it highlights my expertise in Java, Python, Spring Boot, and full-stack development.

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yogita Ingale - Portfolio & Resume 2025</title>
  <link rel="stylesheet" href="styleYG.css">
  <script src="scriptYG.js"></script>
</head>
<body>

  <header>
    <nav>
      <a href="#about">About</a>
      <a href="#expertise">Expertise</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section id="about">
    <h1>Yogita Ingale</h1>
    <img src="download (48).jpg" alt="Profile photo" class="profile-photo">
    <h2>About Me</h2>
    <p>
      I'm a passionate Java and Python developer with strong expertise in Java Spring Boot, Django, Angular, and MySQL. I specialize in building clean, scalable, and efficient web solutions, with hands-on experience in creating and integrating RESTful APIs and developing robust desktop applications using Java Swing. I’ve successfully delivered projects like an Online Food Ordering System, and an Billing System. I hold a Master’s degree in Computer Science with a CGPA of 8.75, and I’m deeply committed to crafting impactful software that drives real-world results.
    </p>
    <p>
        📧 ingyogita95@gmail.com |   📞 +91 9119595717 <br>
        🌐 
        <a href="https://github.com/yogitaingale" target="_blank" class="link-button">GitHub</a> |
        <a href="https://linkedin.com/in/yogitaingale" target="_blank" class="link-button">LinkedIn</a>
      </p>
      
  </section>

  <section id="expertise">
    

    <h3>Software Skills</h3>
    <div class="software-skills">
      <div class="skill-item">Java</div>
      <div class="skill-item">Spring Boot</div>
      <div class="skill-item">Angular</div>
      <div class="skill-item">MySQL</div>
      <div class="skill-item">REST APIs</div>
      <div class="skill-item">HTML/CSS</div>
      <div class="skill-item">JavaScript</div>
      <div class="skill-item">Git</div>
      <div class="skill-item">Maven</div>
      <div class="skill-item">JUnit</div>
      <div class="skill-item">Hibernate</div>
      <div class="skill-item">Microservices</div>
      <div class="skill-item">Java Development</div>
      <div class="skill-item">Spring Boot</div>
      <div class="skill-item">Angular</div>
      <div class="skill-item">MySQL</div>
      <div class="skill-item">Web Application Development</div>
      <div class="skill-item">RESTful API Design</div>
    </div>
  </section>

  <section id="education">
    <h2>Education</h2>
    <p><strong>Bachelor of Science in Computer Science</strong><br>
    Waghire College, Saswad (SPPU)<br>
    8.75 CGPA<br>
    2019 - 2023</p>
    <p><strong>Master's of Science in Computer Science</strong><br>
        Waghire College, Saswad (SPPU)<br>
        8.39 CGPA<br>
        2023 - 2025
    </p>
   
  </section>

  <section id="projects">
  <h2>My Projects</h2>

  <div class="project">
    <h3>NoshNest – Online Food Ordering System (Java, HTML, CSS, JavaScript)</h3>
    <p>Built a responsive food ordering system with categorized menu sections and interactive item cards.
      Developed backend logic in Java to handle order placement, item processing, and user interaction.
      Designed a dark-themed frontend using HTML, CSS, and JavaScript for a modern and engaging UI.
      Implemented pop-up confirmations and button animations to enhance user experience.</p>
    <a href="https://github.com/your-username/foodfrenzy" target="_blank" class="link-button">View Project</a>
  </div>

  <div class="project">
    <h3>Movie Recommendation System (Python, SQL, NLP)</h3>
    <p>Developed a content-based recommendation engine using TF-IDF vectorization and cosine similarity.
      Processed and analyzed metadata from 5,000+ movies to generate personalized suggestions.
      Achieved 85%+ relevance accuracy in recommendations based on user input and movie features.
      Integrated data preprocessing, feature extraction, and similarity scoring into a single pipeline for efficient results.</p>
    <a href="https://github.com/your-username/movie-recommendation" target="_blank" class="link-button">View Project</a>
  </div>

  <div class="project">
    <h3>Billing System (Python Tkinter)</h3>
    <p>Designed and developed a desktop-based retail billing application using Python and Tkinter for GUI-based product billing and customer management.
    	Implemented category-wise billing for medical, grocery, and beverage items with dynamic price and tax calculation logic.
      Integrated features such as customer detail handling, bill generation, file saving with random bill number, and bill retrieval using the (os) module.
</p>
    <a href="https://github.com/your-username/electricity-billing" target="_blank" class="link-button">View Project</a>
  </div>

</section>
  <section id="contact">
    <h2>Let's Talk!</h2>
    <p>Interested in working together? Fill out the form with your project details and I'll get back to you as soon as possible.</p>
    <p>📧 ingyogita95@gmail.com | 📞 +91 9119595717 <br>📍 Pune, India</p>

    <form class="contact-form" onsubmit="sendMessage(event)">
        <input type="text" name="name" placeholder="Your Name" required>
        <input type="email" name="email" placeholder="Email Address" required>
        <input type="text" name="subject" placeholder="Subject" required>
        <textarea name="message" rows="5" placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
       
      <p id="success-msg" style="display: none; color: #43aa8b; font-weight: 600; text-align: center; margin-top: 1rem;">
    Message successfully sent!
  </p>
  </section>

  <footer>
    ★ Yogita Ingale ★ Java Developer &copy; 2025
  </footer>

  
</body>
</html>
