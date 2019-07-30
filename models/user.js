module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    PASSWORD: DataTypes.STRING,
  });
  return User;
}