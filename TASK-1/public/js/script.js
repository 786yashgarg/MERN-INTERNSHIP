console.log("JavaScript Loaded Successfully");

const form = document.querySelector("form");

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const passwordValue = password.value.trim();

    if (name === "" || email === "" || mobile === "" || passwordValue === "") {
        alert("All fields are required!");
        e.preventDefault();
        return;
    }

    if (!email.includes("@")) {
        alert("Enter a valid email.");
        e.preventDefault();
        return;
    }

    if (mobile.length !== 10) {
        alert("Mobile number must be 10 digits.");
        e.preventDefault();
        return;
    }

    if (passwordValue.length < 6) {
        alert("Password should be at least 6 characters.");
        e.preventDefault();
    return;
}
    

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match!");
        e.preventDefault();
        return;
    }

});

confirmPassword.addEventListener("keyup", function () {

    if (password.value === confirmPassword.value) {

        message.textContent = "✅ Passwords Match";
        message.style.color = "green";

    } else {

        message.textContent = "❌ Passwords Do Not Match";
        message.style.color = "red";

    }

});
// Show/Hide Password
const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "Hide";
    } else {
        password.type = "password";
        togglePassword.textContent = "Show";
    }

});

toggleConfirmPassword.addEventListener("click", function () {

    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
        toggleConfirmPassword.textContent = "Hide";
    } else {
        confirmPassword.type = "password";
        toggleConfirmPassword.textContent = "Show";
    }

});


// Password Strength Meter
const strength = document.getElementById("strength");

password.addEventListener("input", function () {

    const value = password.value;

    if (value.length < 6) {
        strength.textContent = "Weak Password";
        strength.style.color = "red";
    } else if (value.length < 10) {
        strength.textContent = "Medium Password";
        strength.style.color = "orange";
    } else {
        strength.textContent = "Strong Password";
        strength.style.color = "green";
    }
    

});