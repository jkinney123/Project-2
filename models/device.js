module.exports = function (sequelize, DataTypes) {
  var Device = sequelize.define("Device", {
    device: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
  });
  return Device;
};



