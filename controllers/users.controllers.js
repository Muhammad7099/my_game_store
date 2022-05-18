const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

module.exports.usersController = {
   registerUser: async (req, res) => {
    const existedUser = await User.find({ login: req.body.login });

    if (!existedUser) {
        return res.status(400).json({error: 'Ошибка, такой пользователь уже существует'})
    }

    try{
        const { name, email, login, password } = req.body;

       const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS))

       const user = await User.create({ name, email, login, password: hash });

       res.json(user)
    } catch(e) {
        return res.status(400).json({error: 'Ошибка при регистрации' + e.toString()})
    }
       
   },

   login: async (req, res) => {
       const { login, password } = req.body;

       const candidate = await User.findOne({ login });

       if (!candidate) {
           return res.status(401).json('Неверный логин')
       }

       const valid = await bcrypt.compare(password, candidate.password);

       if(!valid) {
           return res.status(401).json('Неверный пароль');
       }

       const payload = {
           id: candidate._id,
           login: candidate.login,
       }

       const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
           expiresIn: '24h',
       });

       res.json({
           token
       })
   }

//    registerUser: async (req, res) => {
//     // const existedUser = await User.find({ login: req.body.login });

//     // if (existedUser) {
//     //     return res.json('user existing!')
//     // }

//     await User.create({
//         name: req.body.name,
//         email: req.body.email,
//         login: req.body.login,
//         password: req.body.password,
//     });
//     res.json("success added user")
// }
}













