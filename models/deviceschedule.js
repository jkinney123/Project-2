module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define("Schedule", {
    deviceID: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    trigger: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return Schedule;
};
