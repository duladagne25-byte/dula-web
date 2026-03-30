// script.js
document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value;
  const course = document.getElementById("course").value;
  const message = document.getElementById("message");

  if (name === "" || email === "" || age === "" || course === "") {
    message.textContent = "⚠️ Please fill in all fields.";
    message.style.color = "red";
  } else {
    message.textContent = `✅ Registration successful! Welcome, ${name}.`;
    message.style.color = "green";
    document.getElementById("registrationForm").reset();
  }
});
