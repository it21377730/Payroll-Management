const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const allowanceSchema = new Schema({
  employeeID: {
    type: String,
    required: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
  trancepotAllwance: {
    type: Number,
    required: true,
  },
  medicalAllwance: {
    type: Number,
    required: true,
  },
  overtimePayment: {
    type: Number,
    required: true,
  },
  bonusPayment: {
    type: Number,
    required: true,
  },
  totalAllowance: {
    type: Number,
    required: true,
  },
});

const Allowance = mongoose.model("allowance", allowanceSchema);

module.exports = Allowance;
