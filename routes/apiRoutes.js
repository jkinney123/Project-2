var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Security.findAll({}).then(function(dbSecurity) {
      res.json(dbSecurity);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Security.create(req.body).then(function(dbSecurity) {
      res.json(dbSecurity);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Security.destroy({ where: { id: req.params.id } }).then(function(dbSecurity) {
      res.json(dbSecurity);
    });
  });
};
