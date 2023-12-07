const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema(
  {
    amount: { type: Number, required: true },
    groupId: { type: mongoose.Types.ObjectId, ref: "Group", required: true },
    creatorId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    currency: String,
    status: {
      type: String,
      required: true,
      default: "active",
      enum: ["active", "paid"],
      // todo: add statuses "unconfirmed", "rejected",
    },
    description: { type: String },
    relatedTo: { type: mongoose.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", expenseSchema);
