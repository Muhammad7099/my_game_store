const mongoose = require("mongoose");


const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },

        login: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: true
        }
    }
)

const User = mongoose.model("User", userSchema);

module.exports = User;
