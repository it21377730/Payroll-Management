const router = require("express").Router();

const { response } = require("express");
let Employee = require("../models/Employee");

//add the new Product to databse
router.route("/employeeAdd").post((req, res) => {
  const employeeID = req.body.employeeID;
  const employeeName = req.body.employeeName;
  const employeeEmail = req.body.employeeEmail;
  const employeeDepartment = req.body.employeeDepartment;
  const employeeType = req.body.employeeType;
  const employeePosition = req.body.employeePosition;
  const employeeBasicSalary = Number(req.body.employeeBasicSalary);
  const salaryCalculationMethod = req.body.salaryCalculationMethod;
  const serviceStartDate = Date(req.body.serviceStartDate);

  const newProduct = new Employee({
    employeeID,
    employeeName,
    employeeEmail,
    employeeDepartment,
    employeeType,
    employeePosition,
    employeeBasicSalary,
    salaryCalculationMethod,
    serviceStartDate,
  });

  newProduct
    .save()
    .then(() => {
      res.json("Employee added successfully");
    })
    .catch((err) => {
      console.log(err);
    });
});

//read Employee  details

router.route("/getEmployee/").get((req, res) => {
  Employee.find()
    .then((inventorys) => {
      res.json(inventorys);
    })
    .catch((err) => {
      console.log(err);
    });
});

//update Employee data
router.route("/updateEmployee/:id").put(async (req, res) => {
  let productId = req.params.id;
  const {
    employeeID,
    employeeName,
    employeeEmail,
    employeeDepartment,
    employeeType,
    employeePosition,
    employeeBasicSalary,
    salaryCalculationMethod,
    serviceStartDate,
  } = req.body;

  const updateProduct = {
    employeeID,
    employeeName,
    employeeEmail,
    employeeDepartment,
    employeeType,
    employeePosition,
    employeeBasicSalary,
    salaryCalculationMethod,
    serviceStartDate,
  };
  const update = await Employee.findByIdAndUpdate(productId, updateProduct)
    .then(() => {
      res.status(200).send({ status: "Employee updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "error updating status data ", error: err.message });
    });
});

//delete the Employee  data  from the  database

router.route("/employeeDelete/:id").delete(async (req, res) => {
  let productId = req.params.id;

  await Employee.findByIdAndDelete(productId)
    .then(() => {
      res.status(200).send({ status: "Employee  deleted" });
    })
    .catch((err) => {
      console
        .status(500)
        .send({ status: "Error deleting user", error: err.message });
    });
});

//single Employee data read

router.route("/employeeGet/:id").get(async (req, res) => {
  let productId = req.params.id;
  await Employee.findById(productId)
    .then((product) => {
      res.status(200).send({ status: "Employee fetchd", product });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "error fetching  get user", error: err.message });
    });
});
module.exports = router;
