document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "admin" && password === "password123") {
        window.location.href = "home.html";
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});