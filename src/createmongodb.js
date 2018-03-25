var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.1.3:27017/entries";

MongoClient.connect(url, function(err, db) {
  if (err) 
  {
    throw err;
  }
  console.log("Database created!");
  db.close();
});