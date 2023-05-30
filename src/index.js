const express = require("express");
const morgan = require("morgan");
const cors = require('cors')

const taskRoutes = require("./routes/tasks.routes");

//Initializations
const app = express();


//Routes
app.use(taskRoutes);

//middleware
app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());


//setting
app.set("port", process.env.PORT || 4000);

//starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})

