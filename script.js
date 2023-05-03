const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const codeInput = document.getElementById("code");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const code = codeInput.value.trim();

    if (username === "elsee" && password === "123456" && code === "BVTKH") {
        window.open('./form.html');
    } else {
        errorMessage.textContent =
            "Invalid Username, Password or Institutional Code. Please try again.";
        errorMessage.style.display = "block";
    }
});
