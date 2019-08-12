/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_product_details', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ProductCode: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Color: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Dimensions: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    IsReturnPolicy: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    Warranty: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Weight: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CountryId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ProductId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Images: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    BrandId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'tb_product_details'
  });
};
