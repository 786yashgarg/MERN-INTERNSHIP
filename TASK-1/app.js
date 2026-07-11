const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Tell Express where the views folder is
app.set("views", path.join(__dirname, "views"));

// Tell Express where CSS, JS and Images are
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Home Route
app.get("/", (req, res) => {
    res.render("index", {
        submitted: false
    });
});
// Form Submission
app.post("/submit", (req, res) => {

    const { name, email, mobile, password } = req.body;

        console.log(req.body);


    res.render("index", {
        submitted: true,
        name,
        email,
        mobile,
        password
    });

});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});