const { Router } = require("express");

const router = Router()

router.use(require("./users.route"))
router.use(require("./categories.route"))
router.use(require("./products.route"))
router.use(require("./carts.route"))
router.use(require("./coments.route"))


module.exports = router;