const mysql = require("mysql");
const { db } = require("./../db");

module.exports = {
/**
 * Api menthod for geting products
 */
getProducts: async (req, res) => {
  try {
    return await db.tb_product.findAll();
  } catch (err) {
    throw new Error(err);
  }
},

/**
 * Api menthod for geting product by id
 */
getProductById: async (req, res) => {
    try {
      return await db.tb_product.findOne({ where: {id: req.params.id} });
    } catch (err) {
      throw new Error(err);
    }
  }
}