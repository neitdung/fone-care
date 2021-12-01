const { brandResolvers } = require("./brand.resolver");
const { categoryResolvers } = require("./category.resolver");
const { customerResolvers } = require("./customer.resolver");
const { officerResolvers } = require("./officer.resolver");
const { orderResolvers } = require("./order.resolver");
const { productResolvers } = require("./product.resolver");

exports.resolvers = [
  brandResolvers,
  categoryResolvers,
  customerResolvers,
  officerResolvers,
  orderResolvers,
  // productResolvers,
];
