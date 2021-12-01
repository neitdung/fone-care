const { brandTypeDefs } = require("./brand.schema");
const { categoryTypeDefs } = require("./category.schema");
const { customerTypeDefs } = require("./customer.schema");
const { officerTypeDefs } = require("./officer.schema");
const { orderTypeDefs } = require("./order.schema");
const { productTypeDefs } = require("./product.schema");

exports.typeDefs = [
  brandTypeDefs,
  categoryTypeDefs,
  customerTypeDefs,
  officerTypeDefs,
  orderTypeDefs,
  productTypeDefs
];
