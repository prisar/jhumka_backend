/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_userlog', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    UserId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    LoginTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LogoutTime: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'tb_userlog'
  });
};
