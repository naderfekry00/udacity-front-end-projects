var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.static("dist"));

const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

console.log(__dirname);

const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";
const apiKey = process.env.API_KEY;
// Variables for url and api key

app.get("/", function (req, res) {
  // res.send("This is the server API page, you may access its services via the client app.");
  res.sendFile("dist/index.html");
});

// POST Route
app.post("/api", async (req, res) => {
  const userUrl = req.body.url;
  console.log(`URL from user: ${userUrl}`);
  const apiUrl = `${baseURL}key=${apiKey}&url=${userUrl}&lang=en`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
  res.send(data);
});

// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
  console.log("Example app listening on http://localhost:8000");
});
