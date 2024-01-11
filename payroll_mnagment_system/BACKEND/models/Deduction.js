const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const deductionSchema = new Schema({
  employeeID: {
    type: String,
    required: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
  loanDeduction: {
    type: Number,
    required: true,
  },
  taxDeduction: {
    type: Number,
    required: true,
  },
  taxRate: {
    type: Number,
    required: true,
  },
  leaveDeduction: {
    type: Number,
    required: true,
  },
  otherDeduction: {
    type: Number,
    required: true,
  },
  totalDeduction: {
    type: Number,
    required: true,
  },
});

const Deduction = mongoose.model("deduction", deductionSchema);

module.exports = Deduction;
