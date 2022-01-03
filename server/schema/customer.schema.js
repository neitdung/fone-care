const { gql } = require('apollo-server-express');

exports.customerTypeDefs = gql`
    type Options {
        qty: Int
        color: String
        maxQty: Int
    }

    input OptionsInput {
        qty: Int
        color: String
        maxQty: Int
    }

    type Cart {
        productId: String
        options: Options
    }

    input CartInput {
        productId: String
        options: OptionsInput
    }

    type Customer {
        id: ID
        name: String
        email: String
        password: String
        phoneNumber: String
        addresses: String
        birthday: String
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
        email: String
        password: String
        phoneNumber: String
        addresses: String
        birthday: String
        cart: CartInput
        wishlist: [String]
        reviews: [String]
        orders: [String]
    }

    type Query{
        getAllCustomers: [Customer]
        getCustomer(id:ID): Customer
    }

    
    input LoginCustomerInput{
        email: String
        password: String
    }

    type Mutation{
        createCustomer(input:CustomerInput): Customer
        updateCustomer(input:CustomerInput): Customer
        loginCustomer(input:LoginCustomerInput): Customer

    }
`;
