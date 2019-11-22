const passport = require("passport");
const express = require("express");
const router = express.Router();

//* For Google Auth Hit this url( Client )
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
  (req, res, next) => {
    res.send("hi");
  }
);

//* Google Redirect callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect("/");
  }
);

router.get("/api/logout", async (req, res) => {
  req.logOut()
  res.redirect("/");
});

router.get("/api/current_user", (req, res, next) => {
  res.send(req.user);
});


module.exports = router;
