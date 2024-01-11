const router = require("express").Router();

const { response } = require("express");
let Deduction = require("../models/Deduction");

//add the new Deduction  to databse
router.route("/deductionAdd").post((req, res) => {
  const employeeID = req.body.employeeID;
  const employeeName = req.body.employeeName;
  const loanDeduction = Number(req.body.loanDeduction);
  const taxDeduction = Number(req.body.taxDeduction);
  const taxRate = Number(req.body.taxRate);
  const leaveDeduction = Number(req.body.leaveDeduction);
  const otherDeduction = Number(req.body.otherDeduction);
  const totalDeduction = Number(req.body.totalDeduction);

  const newProduct = new Deduction({
    employeeID,
    employeeName,
    loanDeduction,
    taxDeduction,
    taxRate,
    leaveDeduction,
    otherDeduction,
    totalDeduction,
  });

  newProduct
    .save()
    .then(() => {
      res.json("Deduction added successfully");
    })
    .catch((err) => {
      console.log(err);
    });
});

//read Deduction  details

router.route("/getDeduction/").get((req, res) => {
  Deduction.find()
    .then((inventorys) => {
      res.json(inventorys);
    })
    .catch((err) => {
      console.log(err);
    });
});

//update Deduction data
router.route("/updateDeduction/:id").put(async (req, res) => {
  let productId = req.params.id;
  const {
    employeeID,
    employeeName,
    loanDeduction,
    taxDeduction,
    taxRate,
    leaveDeduction,
    otherDeduction,
    totalDeduction,
  } = req.body;

  const updateProduct = {
    employeeID,
    employeeName,
    loanDeduction,
    taxDeduction,
    taxRate,
    leaveDeduction,
    otherDeduction,
    totalDeduction,
  };
  const update = await Deduction.findByIdAndUpdate(productId, updateProduct)
    .then(() => {
      res.status(200).send({ status: "Deduction updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "error updating status data ", error: err.message });
    });
});

//delete the Deduction  data  from the  database

router.route("/DeductionDelete/:id").delete(async (req, res) => {
  let productId = req.params.id;

  await Deduction.findByIdAndDelete(productId)
    .then(() => {
      res.status(200).send({ status: "Deduction  deleted" });
    })
    .catch((err) => {
      console
        .status(500)
        .send({ status: "Error deleting user", error: err.message });
    });
});

//single Deduction data read

router.route("/deductionGet/:id").get(async (req, res) => {
  let productId = req.params.id;
  await Allowance.findById(productId)
    .then((product) => {
      res.status(200).send({ status: "Deduction fetchd", product });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "error fetching  get user", error: err.message });
    });
});
module.exports = router;
