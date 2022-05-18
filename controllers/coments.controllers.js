const Coment = require('../models/Coment.model');
const jwt = require("jsonwebtoken");

module.exports.comentsController = {
    getAllComents: async (req, res) => {
        try{
            const coments = await Coment.find();

            res.json(coments)
        }catch (e) {
            return res.status(400).json({
                error: e.toString(),
            })
        }
    },

    deleteComent: async (req, res) => {
        const { id } = req.params;

        try{
            const coment = await Coment.findById(id);

            if(coment.user.toString() === req.user.id) {
                await coment.remove()

                return res.json("Удалено")
            }

            return res.status(401).json("Ошибка. Нет доступа")
            
        }catch(e) {
            return res.status(401).json('Ошибка: ' + e.toString())
        }
    },

    createComent: async (req, res) => {
        const { text } = req.body;
        
        try{
            const coment = await Coment.create({
                user: req.user.id,
                text
            })

            return res.json(coment)
        }catch(e){
            return res.status(401).json('Неверный токен')
        }
    }
}