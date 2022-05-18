const mongoose = require("mongoose")

const comentSchema = mongoose.Schema({
    text: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

const Coment = mongoose.model("Coment", comentSchema);

module.exports = Coment;