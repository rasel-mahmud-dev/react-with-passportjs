const express = require("express");
const mongoose = require('mongoose')
const passport = require('passport')
const cookieSession = require('cookie-session')


require('./model/User')
require('./services/passport')
const authRoutes = require('./routes/auth')
const keys = require('./config/keys')

const app = express();

//* Passport Set_cookie and sesstion
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieSecret]
}))
app.use(passport.initialize())
app.use(passport.session())



app.use(authRoutes)


const PORT = process.env.PORT || 4000;
mongoose
  .connect(keys.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(res => {
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
    console.log("Database Connected.");
  })
  .catch(err => console.log(err));
