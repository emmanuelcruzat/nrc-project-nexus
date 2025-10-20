document.addEventListener("DOMContentLoaded", () => {
  fetch("/Website Files/Universal/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(err => console.error("Failed to load navbar:", err));
});
