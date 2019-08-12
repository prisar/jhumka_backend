const router = require('express').Router();
const ProductController = require('../controllers/ProductController');

router.get('/', ProductController.getProducts);

router.get('/:id', ProductController.getProductDetailsById);

module.exports = router;