const { Router } = require('express');

const {
    categoriesController,
} = require('../controllers/categories.controllers');

const router = Router()

router.get('/getAllCategory', categoriesController.getAllCategory)
router.get('/category/:id', categoriesController.getCategoryById)
router.post('/addCategory', categoriesController.createCategory)
router.delete('/category/:id', categoriesController.removeCategory)
router.patch('/category/:id', categoriesController.editCategory)

module.exports = router