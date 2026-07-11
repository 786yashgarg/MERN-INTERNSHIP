console.log("JavaScript Loaded Successfully");

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const mobile = document.querySelector('input[name="mobile"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();

    if (name === "" || email === "" || mobile === "" || password === "") {
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

    if (password.length < 6) {
        alert("Password should be at least 6 characters.");
        e.preventDefault();
    }
});