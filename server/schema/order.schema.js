const { gql } = require('apollo-server-express');

exports.orderTypeDefs = gql`
    type Contact {
        email: String
        name: String
        telephone: String
        detail: String
        address: String
    }

    input ContactInput {
        email: String
        name: String
        telephone: String
        detail: String
        address: String
    }

    type Order{
        id: ID
        total: Float
        products: [Product]
        customer: String
        contact: Contact
        status: String
    }

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

    type Product{
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

    input ProductInput{
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
        category: Category
        status: String
        isDelete: Boolean
    }

    input OrderInput{
        id: ID
        total: Float
        products: [ProductInput]
        customer: String
        contact: ContactInput
        status: String
    }

    type Query{
        getAllOrders: [Order]
        getOrder(id:ID): Order
    }

    type Mutation{
        createOrder(input:OrderInput): Order
        updateOrder(input:OrderInput): Order
    }
`;
