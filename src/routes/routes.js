const express = require("express");
//o require seria o import do java 
const router = express.Router();

const controller = 
require("../controllers/produto.controller");

router.get("/", controller.listar);
router.post("/", controller.criar);

module.exports = router;

// em java um classe com so uma estanciua se chama singleton.
//