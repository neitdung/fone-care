const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Imei = {
  imei: {
    type: String,
    required: true,
    unique: true,
  },
  product: {
    type: ObjectId,
    ref: "Product",
  },
  status: {
    type: String,
    default: "Inventory Created",
  },
};

const ImeiSchema = new Schema(Imei);
module.exports = mongoose.model("Imei", ImeiSchema);
