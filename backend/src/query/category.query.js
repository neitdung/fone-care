import { gql } from "@apollo/client";

export const GET_CATEGORY = gql`
  query GetCategory($id: ID) {
    getCategory(id: $id) {
      id
      name
      description
      parentCate {
        id
        name
      }
      image
      mainCate
    }
  }
`;
export const GET_CATEGORIES = gql`
  query GetAllCategories {
    getAllCategories {
      id
      name
      description
      parentCate {
        id
        name
      }
      image
      slug
      mainCate
    }
  }
`;
export const UPDATE_CATEGORY = gql`
  mutation UpdateCategory($input: CategoryInput) {
    updateCategory(input: $input) {
      id
      name
      description
      parentCate {
        id
        name
      }
      image
      mainCate
    }
  }
`;
export const CREATE_CATEGORY = gql`
  mutation CreateCategory($input: CategoryInput) {
    createCategory(input: $input) {
      id
      name
      description
      parentCate {
        id
        name
      }
      image
      mainCate
    }
  }
`;
