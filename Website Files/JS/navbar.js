// Load the navbar from an external HTML file
document.addEventListener("DOMContentLoaded", () => {
  fetch("/Website Files/Universal/NavBar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    })
    .catch(err => console.error("Failed to load navbar:", err));
});
