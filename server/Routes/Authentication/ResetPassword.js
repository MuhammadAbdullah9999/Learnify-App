const express = require("express");
const bcrypt = require("bcrypt");
const Student = require("../../model/user");

const router = express.Router();
const saltRounds = 10;

router.post("/", async (req, res) => {
  const { password, email, currentPassword } = req.body;
  const user = await Student.findOne({ email: email });

  if (user) {
    const passwordMatches = bcrypt.compareSync(currentPassword, user.password);
    if (passwordMatches) {
      bcrypt.hash(password, saltRounds, async (err, hashedPassword) => {
        if (err) {
          res.status(500).json({ message: "Error hashing the new password" });
          return;
        }

        user.password = hashedPassword;

        try {
          await user.save(); // Save the updated user to the database
          res.status(200).json({ message: "Password updated successfully",newPassword:password });
        } catch (error) {
          res.status(500).json({ message: "Error updating the user in the database" });
        }
      });
    } else {
      res.status(500).json({ message: "Incorrect Password" });
    }
  } else {
    res.status(404).json({ message: "User not exist with provided email" });
  }
});

module.exports = router;
