const { Router } = require("express");

const {
    productsController,
} = require("../controllers/products.controllers");

const router = Router();

router.get("/getAllProduct", productsController.getAll);
router.get('/product/category/:id', productsController.getProductsByCategoryId);
router.get('/product/:id', productsController.getProductById);
router.post("/create/product", productsController.createProduct);
router.patch('/product/:id', productsController.editProduct);
router.delete('/product/:id', productsController.removeProduct);

module.exports = router;

