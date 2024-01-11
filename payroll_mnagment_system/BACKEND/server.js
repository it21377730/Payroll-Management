const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Mongodb connection successfully !");
});

const employee = require("./routes/employees");
const allowance = require("./routes/allowances");
const deduction = require("./routes/deductions");

app.use("/employee", employee);
app.use("/allowance", allowance);
app.use("/deduction", deduction);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
