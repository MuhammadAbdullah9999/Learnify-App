const express = require("express");
const bcrypt = require("bcrypt");
const Student = require("../../model/user");
// require('dotenv').config()


const saltRounds = 10;
const secretKey = "abd";

const router = express.Router();

router.post("/", async (req, res) => {
    const studentData = {
      firstName: req.body.firstName,
      lastName:req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    };
    console.log(studentData);
     
    // const studentData=req.body;
  
    const existingUser = await Student.findOne({ email: studentData.email });
  
    if (existingUser) {
      res.status(409).json({ message: "User already exists!" }).send();
    } else {
      const hashedPassword = bcrypt.hashSync(studentData.password, saltRounds);
      studentData.password = hashedPassword;
  
      const user = new Student(studentData);
      await user.save();

  
      res.status(200).json(studentData);
    //   jwt.sign(studentData, secretKey, { expiresIn: "1h" }, (err, token) => {
    //     const response = {
    //       name: studentData.name,
    //       email: studentData.email,
    //     };
    //     res
    //       .status(200)
    //       .cookie("jwt", token, {
    //         expires: new Date(Date.now() + 3600000),
    //         httpOnly: true, // Ensures the cookie is accessible only via HTTP(S) requests
    //         secure: true, // Ensures the cookie is sent only over HTTPS in production
    //       })
    //       .json(response);
    //   });
    }
  });

  module.exports=router;