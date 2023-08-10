document.addEventListener("DOMContentLoaded", function() {
    var signupForm = document.getElementById("signup-form");
  
    signupForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var confirmPassword = document.getElementById("confirm-password").value;
  
      // Perform validation and signup logic here
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
  
      // Signup successful, proceed with further actions (e.g., redirect to dashboard)
      alert("Signup successful!");
      window.location.href = "dashboard.html";
    });
  });
  