const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getAccountsDb("Accounts");
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});
recordRoutes.route("/northdiet").get(function (req, res) {
  let db_connect1 = dbo.getDietDb("diet");
  db_connect1
    .collection("northdiet")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});
recordRoutes.route("/southdiet").get(function (req, res) {
  let db_connect2 = dbo.getDietDb("diet");
  db_connect2
    .collection("southdiet")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getAccountsDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("records").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});
recordRoutes.route("/northdiet/:id").get(function (req, res) {
  let db_connect = dbo.getDietDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("northdiet").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
  let db_connect = dbo.getAccountsDb();
  let myobj = {
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    loggedIn: req.body.loggedIn,
  };
  db_connect.collection("records").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getAccountsDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      height: req.body.height,
      weight: req.body.weight,
      foodpref: req.body.foodpref,
      lifestyle: req.body.lifestyle,
      bmi: req.body.bmi,
      gender: req.body.gender,
      age: req.body.age,
    },
  };
  db_connect
    .collection("records")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

//update food preference

recordRoutes.route("/updatefood/:id").post(function (req, response) {
  let db_connect = dbo.getAccountsDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      foodpref: req.body.foodpref,
    },
  };
  db_connect
    .collection("records")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});
recordRoutes.route("/updateGoal/:id").post(function (req, response) {
  let db_connect = dbo.getAccountsDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      weightToLose: req.body.weightToLose,
      dayLimit: req.body.dayLimit,
      activityLevel: req.body.activityLevel,
    },
  };
  db_connect
    .collection("records")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getAccountsDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;
