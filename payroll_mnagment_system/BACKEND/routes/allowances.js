const router = require("express").Router();

const { response } = require("express");
let Allowance = require("../models/Allowance");

//add the new Allowance to databse
router.route("/allowanceAdd").post((req, res) => {
  const employeeID = req.body.employeeID;
  const employeeName = req.body.employeeName;
  const trancepotAllwance = Number(req.body.trancepotAllwance);
  const medicalAllwance = Number(req.body.medicalAllwance);
  const overtimePayment = Number(req.body.overtimePayment);
  const bonusPayment = Number(req.body.bonusPayment);
  const totalAllowance = Number(req.body.totalAllowance);

  const newProduct = new Allowance({
    employeeID,
    employeeName,
    trancepotAllwance,
    medicalAllwance,
    overtimePayment,
    bonusPayment,
    totalAllowance,
  });

  newProduct
    .save()
    .then(() => {
      res.json("Allowance added successfully");
    })
    .catch((err) => {
      console.log(err);
    });
});

//read Allowance  details

router.route("/getAllowance/").get((req, res) => {
  Allowance.find()
    .then((inventorys) => {
      res.json(inventorys);
    })
    .catch((err) => {
      console.log(err);
    });
});

//update Allowance data
router.route("/updateAllowance/:id").put(async (req, res) => {
  let productId = req.params.id;
  const {
    employeeID,
    employeeName,
    trancepotAllwance,
    medicalAllwance,
    overtimePayment,
    bonusPayment,
    totalAllowance,
  } = req.body;

  const updateProduct = {
    employeeID,
    employeeName,
    trancepotAllwance,
    medicalAllwance,
    overtimePayment,
    bonusPayment,
    totalAllowance,
  };
  const update = await Allowance.findByIdAndUpdate(productId, updateProduct)
    .then(() => {
      res.status(200).send({ status: "Allowance updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "error updating status data ", error: err.message });
    });
});

//delete the Allowance  data  from the  database

router.route("/allowanceDelete/:id").delete(async (req, res) => {
  let allowanceId = req.params.id;

  await Allowance.findByIdAndDelete(allowanceId)
    .then(() => {
      res.status(200).send({ status: "Allowance  deleted" });
    })
    .catch((err) => {
      console
        .status(500)
        .send({ status: "Error deleting user", error: err.message });
    });
});

//single Employee data read

router.route("/allowanceGet/:id").get(async (req, res) => {
  let productId = req.params.id;
  await Allowance.findById(productId)
    .then((product) => {
      res.status(200).send({ status: "Allowance fetchd", product });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "error fetching  get user", error: err.message });
    });
});
module.exports = router;
