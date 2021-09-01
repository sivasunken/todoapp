const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = { origin: "http://localhost:8091" };

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();
// db.sequelize
//   .sync({ force: true })
//   .then(() => console.log("Drop and re-sync db."));


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to todo node application" });
});

// Task routes
require("./app/routes/task.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
