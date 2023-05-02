const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const bvsInput = document.getElementById("bvs");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const bvs = bvsInput.value.trim();

    if (username === "elsee" && password === "123456" && bvs === "BVTKH") {
        window.open('./form.html');
    } else {
        errorMessage.textContent =
            "Invalid username, password, or BVS. Please try again.";
        errorMessage.style.display = "block";
    }
});
