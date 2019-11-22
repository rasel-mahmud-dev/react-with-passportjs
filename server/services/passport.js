const passport = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

const User = mongoose.model("users");


//*
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async(id, done) => {
  const user = await User.findById(id)
  done(null, user);
});

//* Google Outh 2.0 Passport stratrgy setup
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googelClientID,
      clientSecret: keys.googelClientSecret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      const exitingUser = await User.findOne({ googleId: profile.id });
      if (exitingUser) return done(null, exitingUser);

      const user = await new User({
        googleId: profile.id,
        username: profile.displayName,
        email: profile.emails[0].value,
        avatar: profile.photos[0].value
      }).save();

      done(null, user);
    }
  )
);
