var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Security.findAll({}).then(function(dbSecurity) {
      res.render("index", {
        msg: "Welcome!",
        Security: dbSecurity
      });
    });
  });

  // Load Security page and pass in an Security by id
  app.get("/Security/:id", function(req, res) {
    db.Security.findOne({ where: { id: req.params.id } }).then(function(dbSecurity) {
      res.render("Security", {
        Security: dbSecurity
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
