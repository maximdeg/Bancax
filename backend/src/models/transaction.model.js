import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "The transaction has to have a user."],
  },
  amount: {
    type: Number,
    required: [true, "The transaction has to have an amount."],
    // min: [0, "The amount has to be greater than 0.00"],
  },
  source_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Source",
    required: [true, "The transaction has to have a source."],
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "The transaction has to have a category."],
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
    required: [true, "The transaction has to have a date."],
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
