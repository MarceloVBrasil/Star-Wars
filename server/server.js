require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");

app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json());

// Authenticate User and give access Token
app.post("/requestToken", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = { username, password };

  // Authenticate User

  // Give user Access Token
  const accessToken = jwt.sign(user, process.env.JWT_SECRET_KEY);
  res.json({ accessToken });
});

app.listen(3001);
