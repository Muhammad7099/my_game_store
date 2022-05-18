const Cart = require("../models/Cart.model");

module.exports.cartController = {
    getCart: async (req, res) => {
        try {
            const response = await Cart.find();
            res.status(200).json(response);
        }catch (e) {
            res.status(400).json({ error: e.toString() });
        }
    },

    createCart: async (req, res) => {
        try {
            const { gameId, total } = req.body;
            await Cart.create({
                gameId,
                total
            }),
            res.status(200).json("Корзина создана")
        }catch (e) {
            res.status(400).json({ error: e.toString() });
        }
    },

    deleteCart: async (req, res) => {
        try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Корзина удалена");
        } catch (e) {
            res.status(400).json({ error: e.toString() });
        }
    }
    
}