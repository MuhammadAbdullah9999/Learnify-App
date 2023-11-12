const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// require("./passport.js");

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const SignUp = require("./Routes/Authentication/SignUp.js");
const SignIn = require("./Routes/Authentication/SignIn.js");
const resetPassword = require("./Routes/Authentication/ResetPassword.js");
// const Dashboard = require("./Routes/dashboard");
// const logout = require("./Routes/Logout");
// const ForgotPassword = require("./Routes/ForgotPassword");
// const ResetPassword = require("./Routes/ResetPassword");




app.use("/signUp", SignUp);
app.use("/signIn", SignIn);
app.use('/resetPassword',resetPassword);
// app.use("/Logout", logout);
// app.use("/dashboard", Dashboard);
// app.use("/forgot-password", ForgotPassword);
// app.use("/reset-password", ResetPassword);

// Start the server
app.listen(5000, () => console.log("Server started on port 5000"));
