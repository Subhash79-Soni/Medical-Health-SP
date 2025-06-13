/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
// main.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("MindCare Website Loaded");
  });
  // Appointment form submission
const form = document.getElementById('sessionForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Your session has been booked! We'll contact you soon.");
    form.reset();
  });
}
// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thanks for contacting us! We'll get back to you soon.");
    contactForm.reset();
  });
}
// Simple anonymous chat simulation
const chatForm = document.getElementById('chatForm');
const chatBox = document.getElementById('chatBox');
const chatInput = document.getElementById('chatInput');

if (chatForm && chatBox && chatInput) {
  chatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const userMessage = chatInput.value.trim();
    if (userMessage === '') return;

    appendMessage(userMessage, 'user-message');
    chatInput.value = '';

    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      appendMessage(botResponse, 'bot-message');
    }, 700);
  });

  function appendMessage(message, className) {
    const msgDiv = document.createElement('div');
    msgDiv.className = className;
    msgDiv.textContent = message;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function getBotResponse(input) {
    if (input.toLowerCase().includes("sad")) return "I'm sorry you're feeling that way. Want to talk more about it?";
    if (input.toLowerCase().includes("happy")) return "That's great to hear! 😊";
    if (input.toLowerCase().includes("alone")) return "You're not alone. I'm here for you.";
    return "I understand. Please tell me more.";
  }
}
function openModal(id) {
    document.getElementById(id).style.display = "block";
  }
  
  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }
  
  function switchModal(from, to) {
    closeModal(from);
    openModal(to);
  }
  
  
  // Close modals when clicking outside them
  window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = "none";
    }
  };
  // Theme toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Change icon
    if (document.body.classList.contains('dark-mode')) {
      themeToggle.textContent = '☀️';
    } else {
      themeToggle.textContent = '🌙';
    }
  });
}
// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}


  



