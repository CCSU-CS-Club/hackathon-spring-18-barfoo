const mongodb = require("mongodb");
const client = mongodb.MongoClient;
const test = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'ocr';
var activeCol = null;

module.exports = {
  connectClient() {
    return new Promise((resolve, reject) => {
      try {
        client.connect(url, (err, client) => {
          const adminDb = client.db(dbName).admin();
          activeCol = client.db(dbName).collection("ocr");
          if (activeCol !== undefined)
            resolve(activeCol);
          else {
            reject(err);
          }
        });
      } catch(err) {
        console.error(err);
        reject(err);
      }
    });
  }
};