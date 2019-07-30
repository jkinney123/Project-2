var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(User) {
      res.json(User);
    });
  });

  // Create a new user
  app.post("/register", function(req, res) {
    db.User.create(req.body).then(function(User) {
      res.json(User);
    });
  });

  // Delete an device by id
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(User) {
      res.json(User);
    });
  });
};
