const { Schema, model } = require("mongoose");

const replySchema = new Schema({
  reply: {
    type: String,
  },
  username: {
    type: String,
  },
  date: {
    type: Date,
  },
  likes: {
    type: Number,
  },
});
const Reply = model("reply", replySchema);
module.exports = Reply;
//
