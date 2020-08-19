// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Star Wars Characters (DATA)
// =============================================================
var customers = [];
var custName = document.querySelector("#name");
var custPhone = document.querySelector("#phone-number");
var custEmail = document.querySelector("#email");
var custID = documet.querySelector("unique-id");
document.querySelector("#submit").addEventListener("click", function(event){
    event.preventDefault();
    const customer = new Customer(custName.value, custPhone.value, custEmail.value, custID.value);
    customers.push(customer);
    localStorage.setItem("customer data", customer);
});
// app.get("/home", function(req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
//   });
//   app.get("/reserve-form", function(req, res) {
//     res.sendFile(path.join(__dirname, "reserve-form.html"));
//   });
//   app.get("/reserve-view", function(req, res) {
//     res.sendFile(path.join(__dirname, "reserve-view.html"));
//   });
//   // Displays all characters
//   app.get("/api/customers", function(req, res) {
//     return res.json(clients);
//   });
//   // Displays a single character, or returns false
//   app.get("/api/customers/:customer", function(req, res) {
//     var chosen = req.params.customer;
//     console.log(chosen);
//     for (var i = 0; i < customers.length; i++) {
//       if (chosen === customers[i].routeName) {
//         return res.json(customers[i]);
//       }
//     }
//     return res.json(false);
//   });