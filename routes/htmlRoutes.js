module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("welcome", {
      msg: "Security Application",
    });
  });

  // Load register page
  app.get("/register", function (req, res) {
    res.render("register", {
      msg: "Register",
    });
  });

  // Load login page
  app.get("/login", function (req, res) {
    res.render("login", {
      msg: "Login",
    });
  });

  // Load user dashboard page
  app.get("/dashboard", function (req, res) {
    res.render("dashboard", {
      msg: "Security Dashboard",
    });
  });

  // Load admin page
  app.get("/admin", function (req, res) {
    res.render("admin", {
      msg: "Admin Dashboard",
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

};
