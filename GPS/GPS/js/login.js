document.addEventListener("DOMContentLoaded", () => {
  const authFacade = new AuthFacade();

  console.log("JFLKJDLSD");
  if (authFacade.isAuthenticated()) {
    window.location.href = "index.html";
    return;
  }

  const loginForm = document.getElementById("login-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const errorMessage = document.getElementById("error-message");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault(); 

      const email = emailInput.value;
      const password = passwordInput.value;

      const result = authFacade.login(email, password);

      if (result.success) {
        errorMessage.classList.add("hidden");
        alert(result.message); 
        window.location.href = "index.html";
      } else {
        errorMessage.classList.remove("hidden");
        errorMessage.innerText = result.message;
      }
    });
  }
});
