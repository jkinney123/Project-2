module.exports = function(sequelize, DataTypes) {
  var Device = sequelize.define("Device", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return Device;
};
