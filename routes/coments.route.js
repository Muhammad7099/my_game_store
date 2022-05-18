const { Router } = require("express");
const { comentsController } = require("../controllers/coments.controllers");
const authMiddleware = require("../models/middlewares/auth.middleware");

const router = Router();

router.get("/coment", comentsController.getAllComents);
router.post("/coment", authMiddleware, comentsController.createComent);
router.delete("/coment/:id", authMiddleware, comentsController.deleteComent);


module.exports = router;