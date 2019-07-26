module.exports = function(sequelize, DataTypes) {
  var Security = sequelize.define("Security", {
    device: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
  });
  return Security;
};
