const jwt = require("jsonwebtoken");
const express = require("express");
const { auth, headers } = require("../middleware");
const router = express.Router();

const ACCOUNTS = {
  'instructor1@umass.edu': 'GoUMass!'
}

const UIDS = {
  'instructor1@umass.edu': 4
}

router.post(
  "/login/callback",
  headers.areHeadersValid,
  auth.isNotAuthenticated,
  (req, res, next) => {
    // TODO: Check SAML properties.
    let userID = -1; // Temporary user ID before SAML is implelmented

    const email = req.body.email;
    const password = req.body.password;

    if(ACCOUNTS[email] && ACCOUNTS[email] === password){
      userID = UIDS[email];
    }else{
      res.status(401);
      res.json({"error": "Invalid auth credentials."});
      return;
    }

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
