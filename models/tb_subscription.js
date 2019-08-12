/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_subscription', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    UserId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    PlanId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    StartDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    EndDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'tb_subscription'
  });
};
