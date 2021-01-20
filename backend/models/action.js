var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
var Schema = mongoose.Schema;

var actionSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      maxlength: 32,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      maxlength: 200,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      maxlength: 100,
      trim: true,
    },
    task: {
      type: String,
      required: true,
      maxlength: 100,
      trim: true,
    },
    role: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Action", actionSchema);
