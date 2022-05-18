const Category = require("../models/Category.model");

module.exports.categoriesController = {
    getAllCategory: async (req, res) => {
        try{
            const categories = await Category.find();

            return res.json(categories)
        }catch (e) {
            return res.status(400).json({
                error: e.toString(),
            })
        }
    },

    getCategoryById: async (req, res) => {
        const { id } = req.params;

        try{
            const category = await Category.findById(id);

            if(!category) {
                return res.status(404).json({
                    error: 'Категория с таким ID не найдена'
                });
            }

            return res.json(category);
        } catch (e) {
            return res.status(400).json({
                error: e.toString(),
            })
        }
    },


    createCategory: async (req, res) => {
        const { name } = req.body;

        if(!name) {
            return res.status(400).json({
                error: 'Необходимо указать название новой категории',
            });
        }

        try{
            const category = await Category.create({ name });
            
            return res.json(category);
        } catch (e) {
            return res.status(400).json({
                error: e.toString(),
            });
        }
    },

    removeCategory: async (req, res) => {
        const { id } = req.params;

        try{
            const deleted = await Category.findByIdAndRemove(id);

            if(!deleted) {
                return res.status(400).json({
                    error: 'Не удалось удалить категорию. Укажите верный ID'
                });
            }

            return res.json({
                message: 'Категория успешно удалена'
            });
        } catch (e) {
            return res.status(400).json({
                error: e.toString()
            });
        }
    },

    editCategory: async (req, res) => {
        const { name } = req.body;
        const { id } = req.params;

        if(!name) {
            return res.status(400).json({
                error: 'Необходимо указать новое название категории'
            })
        }

        try{
            const edited = await Category.findByIdAndUpdate(
                id,
                { name },
                { new: true }
            );

            if(!edited) {
                return res.status(400).json({
                    error: 'Не удалось изменить название. Проверь правильность ID',
                  });
            }

            return res.json(edited);
        } catch (e) {
            return res.status(400).json({
                error: e.toString(),
            })
        }
    }

}