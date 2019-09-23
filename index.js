const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/testDB", { useNewUrlParser: true });

//Creat Schema
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number
});

//Creat a colloection name 'Fruit" which will turn into "fruits"
const Fruit = mongoose.model("Fruit", fruitSchema);

//Creat new document
const apple = new Fruit({
  name: "YAN",
  rating: 10
});

//Save the document to the database
apple.save();

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.listen(3000);
