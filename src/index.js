const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const taskRoutes = require("./routes/tasks.routes.js");
const tipoClienteRoutes = require("./routes/tipoCliente.routes.js");

//Initializations
const app = express();

//Routes
app.use(taskRoutes);
app.use(tipoClienteRoutes);

//middleware
app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//setting
app.set("port", process.env.PORT || 4000);

//starting the server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
