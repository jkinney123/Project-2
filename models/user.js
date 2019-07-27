module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: {
      defaultValue: "password",
      type: DataTypes.STRING
    }
  });
  User.associate = function(models) {
    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts
    User.hasMany(models.Security, {
      onDelete: "cascade"
    });
  };

  return User;
};
