/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_brand', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    brandName: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'tb_brand'
  });
};
