const pool = require("../db");

const getAllTipoCliente = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM tipo_cliente");
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

const createTipoCliente = async (req, res, next) => {
  const result = req.body;
  console.log(result);
  res.send("creando tarea");
  //   const { nombre_tipo_cliente, descripcion_tipo_cliente } = req.body;
  //   try {
  //     const result = await pool.query(
  //       "INSERT INTO tipo_cliente (nombre_tipo_cliente, descripcion_tipo_cliente) VALUES ($1, $2) RETURNING * ",
  //       [nombre_tipo_cliente, descripcion_tipo_cliente]
  //     );
  //     res.json(result.rows[0]);
  //   } catch (error) {
  //     next(error);
  // }
};
module.exports = {
  getAllTipoCliente,
  createTipoCliente,
};
