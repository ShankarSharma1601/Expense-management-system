const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },
    type: {
      type: String,
      required: [true, "type is required"],
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
