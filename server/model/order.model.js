const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;
const Order = {
   total: {
      type: Number,
      required: true
   },
   products: [{
      product: {type: ObjectId, ref: 'Product'},
      options: {
         qty: {type:Number},
         price: {type: Number},
         color: String
         }
      }
   ],
   customer: {
      type: ObjectId,
      ref: 'Customer'
   },
   contact: {
      email: String,
      name: String,
      telephone: String,
      detail: String,
      address: String
   },
   status: {
      type: String,
      default: "Pending"
   }
};

const OrderSchema = new Schema(Order, {timestamps: true});
module.exports = mongoose.model("Order", OrderSchema);
