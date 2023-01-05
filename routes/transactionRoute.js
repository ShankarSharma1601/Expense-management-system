const express = require("express");
const {
  addTransaction,
  getAllTransaction,
} = require("../controllers/transactionController");

const router = express.Router();

// routes
// add transaction || POST method
router.post("/add-transaction", addTransaction);

// get Transaction
router.get("/get-transaction", getAllTransaction);

// export
module.exports = router;
