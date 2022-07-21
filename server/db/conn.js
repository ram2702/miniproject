const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db, _db1;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db) {
        _db_accounts = db.db("Accounts");
        _db_diet = db.db("diet");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getAccountsDb: function () {
    return _db_accounts;
  },
  getDietDb: function () {
    return _db_diet;
  },
};
