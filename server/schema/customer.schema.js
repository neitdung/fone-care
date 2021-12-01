const { gql } = require('apollo-server-express');

exports.customerTypeDefs = gql`
    type Options {
        qty: Number
        color: String
        maxQty: Number
    }

    type Cart {
        productId: String
        options: Options
    }

    type Customer {
        id: ID
        name: String
        email: String
        password: String
        phoneNumber: String
        addresses: String
        birthday: Date
        cart: Cart
        wishlist: [String]
        reviews: [String]
        orders: [String]
    }

    input CustomerInput{
        id: ID
        name: String
        description: String
        bannerImage: String
        name: String
        email: String
        password: String
        phoneNumber: String
        addresses: String
        birthday: Date
        cart: Cart
        wishlist: [String]
        reviews: [String]
        orders: [String]
    }

    type Query{
        getAllCustomers: [Customer]
        getCustomer(id:ID): Customer
    }

    type Mutation{
        createCustomer(input:CustomerInput): Customer
        updateCustomer(input:CustomerInput): Customer
    }
`;
