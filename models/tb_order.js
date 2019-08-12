/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_order', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    USER_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ORDER_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ORDER_AMOUNT: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ORDER_PLACED: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    DELIVERY_ADDRESS: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    SHIPPER_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ShipmentMethod: {
      type: DataTypes.ENUM('Cash on delivery','Debit/Credit Card'),
      allowNull: false,
      defaultValue: 'Cash on delivery'
    },
    TRACKING_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tb_order'
  });
};
