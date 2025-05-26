import { HistoryModel } from "../model/saveHistory.js";

export const addHistory = async (req, res) => {
  const { userEmail, question } = req.body;
  try {
    let userHistory = await HistoryModel.findOne({ userEmail });
    if (userHistory) {
      userHistory.history.push(question);
      await userHistory.save();
    } else {
      userHistory = new HistoryModel({
        userEmail,
        history: [question],
      });
      await userHistory.save();
    }
    res.json({
      message: "success",
    });
  } catch (error) {
    res.json({
      message: "failed",
      error: `${error.message}`,
    });
  }
};

export const findHistory = async (req, res) => {
  const { userEmail } = req.body;
  try {
    const userHistory = await HistoryModel.findOne({ userEmail });
    res.json({
      message: "success",
      data: userHistory.history,
    });
  } catch (error) {
    res.json({
      message: "error",
      error: error.message,
    });
  }
};

export const clearHistory = async (req, res) => {
  const { userEmail } = req.body;
  try {
    const userHistory = await HistoryModel.findOne({ userEmail });
    if (!userHistory) {
      res.json({
        message: "notFound",
      });
    }
    userHistory.history = [];
    await userHistory.save();
    res.json({
      message: "success",
    });
  } catch (error) {
    res.json({
      message: "failed",
      error: error.message,
    });
  }
};
