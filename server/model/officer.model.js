const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Officer = {
  username: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: "OFFICER",
  },
  password: {
    type: String,
    required: true,
  },
};

const OfficerSchema = new Schema(Officer, { timestamps: true });
module.exports = mongoose.model("Officer", OfficerSchema);
