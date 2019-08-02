var db = require("../models");

module.exports = function(app) {
  // Get all devices
  app.get("/api/devices", function(req, res) {
    db.Device.findAll({}).then(function(dbDevices) {
      res.json(dbDevices);
    });
  });

  // Create a new device
  app.post("/api/devices", function(req, res) {
    console.log(req.body);
    db.Device.create(req.body).then(function(dbDevice) {
      res.json(dbDevice);
    });
  });

  // Delete a device by id
  app.delete("/api/devices/:id", function(req, res) {
    db.Device.destroy({ where: { id: req.params.id } }).then(function(dbDevice) {
      res.json(dbDevice);
    });
  });
};
