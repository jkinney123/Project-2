module.exports = function(sequelize, DataTypes) {
  var Security = sequelize.define("Security", {
    device_name: DataTypes.INTEGER,
    device_status: DataTypes.BOOLEAN
  });

  Security.associate = function(models) {
    // We're saying that a Security should belong to an Author
    // A Security can't be created without an Author due to the foreign key constraint
    Security.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  
   

  return Security;

};


  