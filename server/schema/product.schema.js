const { gql } = require('apollo-server-express');

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

    type Product{
        sku: String
        IMEI: String
        active: Boolean
        name: String
        description: String
        price: Number
        discount_price: Number
        descriptopn_short: String
        color: String
        inStock: Boolean
        qty: Number
        detail: Detail
        category: Category
        status: String
        isDelete: Boolean
    }

    input ProductInput{
        sku: String
        IMEI: String
        active: Boolean
        name: String
        description: String
        price: Number
        discount_price: Number
        descriptopn_short: String
        color: String
        inStock: Boolean
        qty: Number
        detail: Detail
        category: Category
        status: String
        isDelete: Boolean
    }

    type Query{
        getAllProducts: [Product]
        getProduct(sku): Product
        searchProducts(keyWord): [Product]
    }

    type Mutation{
        createProduct(input:ProductInput): Product
        updateProduct(input:ProductInput): Product
    }
`;
