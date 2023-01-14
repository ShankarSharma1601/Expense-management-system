const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

const router = express.Router();

// routes
// add transaction || POST method
router.post("/add-transaction", addTransaction);

// Edit transaction || POST method
router.post("/edit-transaction", editTransaction);

// Delete Transaction || POST method
router.post("/delete-transaction", deleteTransaction);

// get Transaction
router.post("/get-transaction", getAllTransaction);

// export
module.exports = router;
