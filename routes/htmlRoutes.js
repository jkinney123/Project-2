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

  // Load device page and pass in an device by id
  app.get("/device/:id", function(req, res) {
    db.Device.findOne({ where: { id: req.params.id } }).then(function(dbDevice) {
      res.render("device", {
        device: dbDevice
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
