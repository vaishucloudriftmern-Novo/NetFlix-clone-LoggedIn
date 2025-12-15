const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();


app.use(cors()); 
app.use(bodyParser.json());


const USER_DATA = {
    email: "vaishu@gmail.com",
    password: "123456"
};

app.post("/login", function (req, res) {
    const { email, password } = req.body;

    console.log("User trying to login:", email);

    if (email === USER_DATA.email && password === USER_DATA.password) {
        res.json({
            success: true,
            message: "Login Successful!"
        });
    } else {
        res.json({
            success: false,
            message: "Invalid email or password"
        });
    }
});


app.listen(5000, function () {
    console.log("Backend server running on http://localhost:5000");
});
