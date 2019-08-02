module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Active"
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password2: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return User;
};
