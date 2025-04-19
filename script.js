/* script.js */
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  alert(`Thanks for reaching out, ${name}! We'll respond to your query sent to ${email} shortly.`);
});
