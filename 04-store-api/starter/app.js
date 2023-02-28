require("dotenv").config();
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const express = require("express");
const app = express();
port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send('<h1>hi</h1><a href = "/api/v1/products">products</a>');
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
  try {
    //connectDB
    app.listen(port);
  } catch (err) {
    console.log(err);
  }
};

start();
