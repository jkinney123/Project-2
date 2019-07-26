var db = require("../models");

module.exports = function(app) {
  // Get all Securitys
  app.get("/api/Security", function(req, res) {
    db.Security.findAll({}).then(function(dbSecurity) {
      res.json(dbSecurity);
    });
  });

  // Create a new Security
  app.post("/api/Security", function(req, res) {
    db.Security.create(req.body).then(function(dbSecurity) {
      res.json(dbSecurity);
    });
  });

  // Delete an Security by id
  app.delete("/api/Security/:id", function(req, res) {
    db.Security.destroy({ where: { id: req.params.id } }).then(function(dbSecurity) {
      res.json(dbSecurity);
    });
  });
};
