// "C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe"
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const path = require("path");
let config = require("config"); //we load the db location from the JSON files

//Routes
const actionRoutes = require("./routes/action");

//DB CONNECT
// mongoose
//   .connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   })
//   .then(() => {
//     console.log("DB Connected");
//   });

mongoose.connect(config.DBHost, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error:"));

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//my routes
app.use("/api", actionRoutes);

//If production
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("projfrontend/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(
//       path.resolve(__dirname, "projfrontend", "build", "index.html")
//     );
//   });
// }

//PORTS
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`running at ${port}`);
});

module.exports = app;
