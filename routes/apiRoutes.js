var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Device.findAll({}).then(function(Device) {
      res.json(Device);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Device.create(req.body).then(function(Device) {
      res.json(Device);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Device.destroy({ where: { id: req.params.id } }).then(function(Device) {
      res.json(Device);
    });
  });
};
