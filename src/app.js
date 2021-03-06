const express = require("express");
const cors = require("cors");
const connectToDb = require("./utils/db");
const errorHandler = require("./middlewares/errorHandler");
const rateLimit = require("express-rate-limit");
const auth = require("./routes/auth");
const user = require("./routes/user");
const post = require("./routes/post");

const app = express();

connectToDb();
app.use(express.json());

const apiLimiter = new rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minute
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use("/api/v1/auth", apiLimiter);

const allowedOrigins = [process.env.URI, "http://localhost:3000"]
var corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
};

app.use("/api/v1/auth", cors(corsOptions), auth);
app.use("/api/v1/users", cors(corsOptions), user);
app.use("/api/v1/posts", cors(corsOptions), post);

app.use(errorHandler);

module.exports = { app };
