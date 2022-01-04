const { gql } = require('apollo-server-express');

exports.categoryTypeDefs = gql`
    type ParentCateData {
        id: ID
        name: String
        slug: String
    }

    type Category {
        id: ID
        name: String
        description: String
        slug: String
        image: String
        parentCate: ParentCateData
        mainCate: Boolean
    }

    input CategoryInput{
        name: String
        description: String
        image: String
        parentCate: String
        mainCate: Boolean
    }

    type Query{
        getAllCategories: [Category]
        getCategory(id: ID): Category
    }

    type Mutation{
        createCategory(input:CategoryInput): Category
        updateCategory(input:CategoryInput): Category
    }
`;
