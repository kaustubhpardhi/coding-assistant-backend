const mongoose = require("mongoose");

const chatModel = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  bot: {
    type: String,
    required: true,
  },
  messages: [
    {
      sender: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        required: true,
        default: Date.now,
      },
    },
  ],
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const ChatModel = mongoose.model("ChatModel", chatModel);
module.exports = ChatModel;
