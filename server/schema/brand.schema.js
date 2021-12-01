const { gql } = require('apollo-server-express');

exports.brandTypeDefs = gql`
    type Brand {
        id: ID
        name: String
        description: String
        bannerImage: String
    }

    input BrandInput{
        name: String
        description: String
        bannerImage: String
    }

    type Query{
        getAllBrands: [Brand]
        getBrand(id:ID): Brand
    }

    type Mutation{
        createBrand(input:BrandInput): Brand
        updateBrand(input:BrandInput): Brand
    }
`;
