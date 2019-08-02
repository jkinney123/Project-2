var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Device.findAll({}).then(function(dbDevices) {
      res.render("index", {
        msg: "Home Security Devices",
        devices: dbDevices
      });
    });
  });

  // Load device page and pass in a device by id
  app.get("/dashboard/:id", function(req, res) {
    db.Device.findOne({ where: { id: req.params.id } }).then(function(dbDevice) {
      res.render("device", {
        device: dbDevice
      });
    });
  });

  // Load device page and pass in a device by id
  app.get("/device/:id", function(req, res) {
    db.Device.findOne({ where: { id: req.params.id } }).then(function(dbDevice) {
      res.render("device", {
        device: dbDevice
      });
    });
  });

  //Load help Page

  app.get("/welcome", function(req, res) {
    res.render("welcome", {
      msg: "Help",
    });
  });

  // Load register page
  app.get("/register", function(req, res) {
    res.render("register", {
      msg: "Register",
    });
  });

  // Load login page
  app.get("/login", function(req, res) {
    res.render("login", {
      msg: "Login",
    });
  });

  // Load user dashboard page
  app.get("/dashboard", function(req, res) {
    res.render("dashboard", {
      msg: "Device Dashboard",
    });
  });

  // Load admin page
  app.get("/admin", function(req, res) {
    res.render("admin", {
      msg: "Admin Dashboard",
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
