const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    amount: {
      type: number,
      required: [true, "Amount is required"],
    },
    category: {
      type: String,
      required: [true, "category is required"],
    },
    reference: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    date: {
      type: String,
      required: [true, "date is required"],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("transactions", transactionSchema);
