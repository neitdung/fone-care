const { gql } = require('apollo-server-express');

exports.categoryTypeDefs = gql`
    type Category {
        id: ID
        name: String
        description: String
        image: String
        parentCate: String
        childCate: String
        mainCate: String
    }

    input CategoryInput{
        name: String
        description: String
        image: String
        parentCate: String
        childCate: String
        mainCate: String
    }

    type Query{
        getAllCategorys: [Category]
        getCategory(id: ID): Category
    }

    type Mutation{
        createCategory(input:CategoryInput): Category
        updateCategory(input:CategoryInput): Category
    }
`;
