const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require('multer');
const upload = multer();
const mongo = require("./mongodb");
const activeCollection = mongo.activeCollection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (req, res) => {
  res.send("Hello World.")
  mongo.connectClient().then((collection) => {
    collection.insert([{test:"Test1"}]);
  });
})

app.post("/ocr", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});
app.listen(3000);