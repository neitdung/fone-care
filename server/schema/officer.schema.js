const { gql } = require('apollo-server-express');

exports.officerTypeDefs = gql`
    type Officer{
        id: ID
        username: String
        password: String
        fullname: String
        role: Role
        email: String
    }

    enum Role{
        MANAGER
        OFFICER
        SUPPLIER
    }

    input OfficerInput{
        username: String
        password: String
        fullname: String
        role: Role
        email: String
    }

    input LoginOfficerInput {
        username: String
        password: String
    }

    type Token {
        token: String,
        error: Boolean
    }

    type Query{
        getAllOfficers: [Officer]
        getOfficer(id:ID): Officer
    }

    type Mutation{
        createOfficer(input:OfficerInput): Officer
        loginOfficer(input:LoginOfficerInput): Token
    }
`;