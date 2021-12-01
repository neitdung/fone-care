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
  discount_price: {
    type: Number,
    default: 0
  },
  descriptopn_short: {
    type: String
  },
  color: {
      type: String
  },
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
    brand: {
        type: ObjectId,
        ref: 'Brand'
     },
    cpu: {
        type: String
    },
    ram: {
        type: String
    },
    screen_size: {
        type: String
    },
    hard_drive: {
        type: String
    },
    screen_relolution: {
        type: String
    },
    sound: {
        type: String
    },
    wireless_connect: {
        type: String
    },
    pin: {
        type: String
    },
    os: {
        type: String
    },
    weight: {
        type: String
    },
    material: {
        type: String
    },
    image_url: {
        type: String
    }
  },
  category: {
    type: ObjectId,
    ref: 'Category'
  },
  isDelete: {
      type: Boolean,
      default: false
  }
};

const ProductSchema = new Schema(Product, { timestamps: true });

ProductSchema.index({'$**': 'text'});

module.exports = mongoose.model("Product", ProductSchema);
