const { Router } = require("express");
const {
  getAllTipoCliente,
  // getTipoCliente,
  createTipoCliente,
  // deleteTipoCliente,
  // updateTIpoCliente,
} = require("../controllers/tipoCliente.controller.js");

const router = Router();

router.get("/tipoCliente", getAllTipoCliente);
router.post("/tipoCliente", createTipoCliente);

module.exports = router;
