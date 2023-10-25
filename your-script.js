
// JavaScript code for form validation and subscription handling
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const subscriptionForm = document.getElementById("subscription-form");

  loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const loginEmail = document.getElementById("login-email").value;
      const loginPassword = document.getElementById("login-password").value;

      // Validate and process login
      if (loginEmail && loginPassword) {
          // You can add your login logic here
          console.log("Login successful");
      } else {
          alert("Please fill in all fields.");
      }
  });

  signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const signupName = document.getElementById("signup-name").value;
      const signupEmail = document.getElementById("signup-email").value;
      const signupPassword = document.getElementById("signup-password").value;

      // Validate and process signup
      if (signupName && signupEmail && signupPassword) {
          // You can add your signup logic here
          console.log("Sign up successful");
      } else {
          alert("Please fill in all fields.");
      }
  });

  subscriptionForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const subscriptionEmail = document.getElementById("subscription-email").value;

      // Process subscription
      if (subscriptionEmail) {
          // You can add your subscription logic here
          console.log("Subscription successful");
          subscriptionForm.reset();
      } else {
          alert("Please provide an email address.");
      }
  });
});
