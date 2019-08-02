var db = require("../models");

module.exports = function(app) {
  // Get all devices
  app.get("/api/devices", function(req, res) {
    db.Device.findAll({}).then(function(Device) {
      res.json(Device);
    });
  });

  // Create a new device
  app.post("/api/devices", function(req, res) {
    db.Device.create(req.body).then(function(Device) {
      res.json(Device);
    });
  });

  // Delete an device by id
  app.delete("/api/devices/:id", function(req, res) {
    db.Device.destroy({ where: { id: req.params.id } }).then(function(Device) {
      res.json(Device);
    });
  });
};
