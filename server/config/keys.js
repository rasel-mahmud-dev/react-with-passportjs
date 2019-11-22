// module.exports = {
//   mongoURI: "mongodb://localhost/step-react-node-api",
//   googelClientSecret : "kuO0riyT8mywX_cfBvKw8A2r",
//   googelClientID : "169802712538-gpu37tkikd5cuggovtgr30pfm22irbeb.apps.googleusercontent.com",
//   cookieSecret: "FFF:DFOie0fieffffvccc"
// }

if (process.env.NODE_ENV === "production") {
  // we are in production -> return the prod set of keys
  module.exports = require("./prod");
} else {
  //we are development -> return the dev keys!!!
  module.exports = require("./dev");
}


