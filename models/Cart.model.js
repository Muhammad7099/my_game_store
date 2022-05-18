const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    gameId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
    ],
    total: Number,
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;