var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("welcome", {
      msg: "Security Application",
    });
  });

  // Loading login page
  app.get("/dashboard", function (req, res) {
    res.render("dashboard", {
      msg: "Security Dashboard",
    });
  });

  // Loading register page
  app.get("/users/register", function (req, res) {
    res.render("register", {
      msg: "Register",
    });
  });

  // Loading login page
  app.get("/users/login", function (req, res) {
    res.render("login", {
      msg: "Login",
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
