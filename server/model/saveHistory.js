import mongoose from "mongoose";

const HistorySchema = mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  history: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const HistoryModel = mongoose.model("History", HistorySchema);
