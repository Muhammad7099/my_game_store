const { usersController } = require("../controllers/users.controllers");
const { Router } = require("express");

const router = Router();

router.post("/createUser", usersController.registerUser);
router.post("/login", usersController.login);


module.exports = router