const transactionModel = require("../models/transactionModel");

const getAllTransaction = async (req, res) => {
  try {
    const transaction = await transactionModel.find({
      userid: req.body.userid,
    });
    res.status(200).json(transaction);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const addTransaction = async (req, res) => {
  try {
    const new_transaction = new transactionModel(req.body);
    await new_transaction.save();
    res.status(201).send("Transaction Created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { getAllTransaction, addTransaction };
