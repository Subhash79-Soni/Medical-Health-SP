<%-- 
    Document   : appointmentsss
    Created on : May 10, 2025, 3:30:59 PM
    Author     : Uttam
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
 <html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Book a Session - MindCare</title>
  <link rel="stylesheet" href=" component/styles.css">
</head>
<body>
  <header>
    <nav class="navbar">
      <div class="logo">MindCare</div>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="resources.html">Resources</a></li>
        <li><a href="appointment.html" class="active">Book Session</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="page-banner">
    <h1>Book a Session</h1>
    <p>Schedule a confidential session with a qualified mental health professional.</p>
  </section>

  <section class="appointment-form">
<form action="appointment" method="post">     
    <label for="name">Full Name:</label>
      <input type="text" id="name" name="name" required>

      <label for="email">Email Address:</label>
      <input type="email" id="email" name="email" required>

      <label for="date">Preferred Date:</label>
      <input type="date" id="date" name="date" required>

      <label for="time">Preferred Time:</label>
      <input type="time" id="time" name="time" required>

      <label for="type">Session Type:</label>
      <select id="type" name="type" required>
        <option value="">Select Type</option>
        <option value="online">Online</option>
        <option value="in-person">In-person</option>
      </select>

      <label for="notes">Additional Notes:</label>
      <textarea id="notes" name="notes" rows="4" placeholder="Optional..."></textarea>

      <button type="submit" class="btn-primary">Book Session</button>
      
    </form>
  </section>

  <footer>
    <p>&copy; 2025 MindCare | All Rights Reserved.</p>
  </footer>

  <script src="component/main.js"></script>
</body>
</html>
