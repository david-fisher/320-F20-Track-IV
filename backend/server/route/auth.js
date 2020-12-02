const jwt = require("jsonwebtoken");
const express = require("express");
const { auth, headers } = require("../middleware");
const router = express.Router();

router.post(
  "/login/callback",
  headers.areHeadersValid,
  auth.isNotAuthenticated,
  (req, res, next) => {
    // TODO: Check SAML properties.
    const userID = parseInt(req.body.userID) || 0; // Temporary user ID before SAML is implelmented
    const token = jwt.sign(
      {
        role: "instructor",
        identity: "Professor McProfessorface",
        userID,
      },
      process.env.JWT_SECRET,
      { expiresIn: 60 * 60 }
    );
    res.status(202);
    res.cookie("authorization", "Bearer " + token);
    res.json({ token: token });
  }
);

router.get("/logout", function (req, res) {
  res.clearCookie("authorization");
  res.redirect("/");
});

module.exports = router;
