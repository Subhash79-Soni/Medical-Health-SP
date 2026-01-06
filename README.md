# 🏥 Medical-Health-SP (MindCare)

![Project Status](https://img.shields.io/badge/Status-Active-success)
![Java](https://img.shields.io/badge/Backend-Java%20JSP-red)
![Frontend](https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-blue)
![Server](https://img.shields.io/badge/Server-Apache%20Tomcat-orange)

**MindCare** is a compassionate **Mental Health Support Platform** designed to bridge the gap between patients and mental health professionals. It provides a secure environment for booking therapy sessions, accessing self-help resources, and anonymous chatting.

---

## 🌟 Key Features

* **📅 Appointment Booking System:** Users can schedule sessions with psychologists (Online/In-person) using `appointmentsss.jsp`.
* **💬 Anonymous Live Chat:** A built-in chat interface (`chat.html`) with a virtual assistant for immediate emotional support.
* **📚 Resource Library:** Curated articles and videos on anxiety, meditation, and burnout management (`resources.html`).
* **🔐 User Authentication:** Secure Registration and Login system powered by **Java Servlets & JSP**.
* **🌓 Dark/Light Mode:** Fully responsive UI with a theme toggle feature for better accessibility.
* **📱 Responsive Design:** Mobile-friendly interface with a hamburger menu for seamless navigation on all devices.

---

## 🛠️ Tech Stack

| Category | Technologies Used |
| :--- | :--- |
| **Frontend** | HTML5, CSS3 (Animations, Gradients), JavaScript (Vanilla) |
| **Backend** | Java Server Pages (JSP), Servlets |
| **Database** | MySQL (Connected via JDBC) |
| **IDE** | NetBeans / Eclipse |
| **Server** | Apache Tomcat |

---

## 📂 Project Structure

```bash
Medical-Health-SP/
├── index.html             # Landing Page (Home)
├── about.html             # About Us & Team details
├── resources.html         # Self-help articles & videos
├── contact.html           # Contact Form
├── chat.html              # Chat Support Interface
├── appointmentsss.jsp     # Session Booking Form (JSP)
├── Registration.jsp       # User Signup Form (JSP)
├── component/
│   ├── styles.css         # Main Styling (Themes, Animations)
│   └── main.js            # Logic for Chat, Modals, and Theme Toggle
└── src/
    └── (Java Servlets for Backend Logic)
