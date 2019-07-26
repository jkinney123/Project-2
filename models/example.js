module.exports = function(sequelize, DataTypes) {
  var Security = sequelize.define("Security", {
    device_name: DataTypes.INTEGER,
    device_status: DataTypes.BOOLEAN
  });
  Security.associate = function(models) {
    Security.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
   
  };
  return Security;
};
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: {
      defaultValue: "password",
      type: DataTypes.STRING
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Security, {
      onDelete: "cascade"
    });
  };
  return User;
};