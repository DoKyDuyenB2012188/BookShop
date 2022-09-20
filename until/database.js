const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = (callback) =>{
    MongoClient.connect(
      "mongodb+srv://dokyduyen:duyenk200@bookshop.c9ezyhn.mongodb.net/?retryWrites=true&w=majority"
    )
      .then( client => {
        console.log('Connected');
        _db = client.db();
        callback(client);
      })
      .catch((err) => {
        console.log(err);
      });

}
const getDb = () => {
    if(_db){
        return _db;
    }
    throw "No database";
};
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;