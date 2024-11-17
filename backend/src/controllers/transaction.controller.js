import TransactionRepository from "../repositories/transaction.repository.js";
import { responseBuilder } from "../utils/builders/responseBuilder.js";

export const getAllTransactionsController = (req, res) => {
  // FIXME: GET USER_ID FROM SESSION STORAGE
  const user_id = req.params.user_id;
  const transactions =
    TransactionRepository.getAllTransactionsByUserId(user_id);
  return res
    .status(200)
    .json(responseBuilder(true, 200, "Transactions", { transactions }));
};

export const createTransactionController = async (req, res) => {
  try {
    const { user_id, amount, source, category, description } = req.body;

    const transaction = await TransactionRepository.saveTransaction({
      user_id,
      amount,
      source,
      category,
      description,
    });

    res.status(200).json(
      responseBuilder(true, 200, "Transaction created successfully", {
        detail: transaction,
      })
    );
  } catch (err) {
    res.status(500).json(
      responseBuilder(false, 500, "SERVER_ERROR", {
        location: "createTransactionController",
        message: err.message,
      })
    );
  }
};
