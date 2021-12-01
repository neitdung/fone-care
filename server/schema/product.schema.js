const { gql } = require("apollo-server-express");

exports.productTypeDefs = gql`
  type Brand {
    name: String
    description: String
    bannerImage: String
  }

  type Detail {
    brand: Brand
    cpu: String
    ram: String
    screen_size: String
    hard_drive: String
    screen_relolution: String
    sound: String
    wireless_connect: String
    pin: String
    os: String
    weight: String
    material: String
    image_url: String
  }

  input DetailInput {
    brand: String
    cpu: String
    ram: String
    screen_size: String
    hard_drive: String
    screen_relolution: String
    sound: String
    wireless_connect: String
    pin: String
    os: String
    weight: String
    material: String
    image_url: String
  }

  type Product {
    sku: String
    active: Boolean
    name: String
    description: String
    price: Float
    discount_price: Float
    description_short: String
    color: String
    inStock: Boolean
    qty: Int
    detail: Detail
    category: Category
    status: String
    isDelete: Boolean
  }

  type Category {
    id: ID
    slug: String
    name: String
  }

  input CategoryInput {
    id: ID
  }

  input ProductInput {
    sku: String
    active: Boolean
    name: String
    description: String
    price: Float
    discount_price: Float
    description_short: String
    color: String
    inStock: Boolean
    qty: Int
    detail: DetailInput
    category: CategoryInput
    status: String
    isDelete: Boolean
  }

  type Query {
    getAllProducts: [Product]
    getProduct(sku: String): Product
    searchProduct(keyWord: String): [Product]
  }

  type Mutation {
    createProduct(input: ProductInput): Product
    updateProduct(input: ProductInput): Product
  }
`;
