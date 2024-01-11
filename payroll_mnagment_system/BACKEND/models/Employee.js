const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  employeeID: {
    type: String,
    required: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
  employeeEmail: {
    type: String,
    required: true,
  },
  employeeDepartment: {
    type: String,
    required: true,
  },
  employeeType: {
    type: String,
    required: true,
  },
  employeePosition: {
    type: String,
    required: true,
  },
  employeeBasicSalary: {
    type: Number,
    required: true,
  },
  salaryCalculationMethod: {
    type: String,
    required: true,
  },
  serviceStartDate: {
    type: String,
    required: true,
  },
});

const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;
