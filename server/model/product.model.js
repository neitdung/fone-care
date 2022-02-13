const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const Product = {
  sku: {
    type: String,
    required: true,
    unique: true,
  },
  active: {
    type: Boolean,
    default: true
   },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    default: 0,
  },
  color: [ 
    {
      name: String,
      hexCode: String
    }
  ],
  images: [{
    type: String
  }],
  inStock: {
    type: Boolean,
    default: true
   },
  qty: {
  type: Number,
  require: true,
  min: 0
  },
  detail: {
    cpu: {
        type: String
    },
    ram: {
        type: String
    },
    screen_size: {
        type: String
    },
    pin: {
        type: String
    },
  },
  category: {
    type: ObjectId,
    ref: 'Category'
  },
  isDeleted: {
      type: Boolean,
      default: false
  }
};

const ProductSchema = new Schema(Product, { timestamps: true });

ProductSchema.index({'$**': 'text'});

module.exports = mongoose.model("Product", ProductSchema);
