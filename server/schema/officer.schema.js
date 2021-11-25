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
        id: ID
        username: String
        password: String
        fullname: String
        role: Role
        email: String
    }

    type Query{
        getAllOfficers: [Officer]
        getOfficer(id:ID): Officer
    }

    type Mutation{
        createOfficer(input:OfficerInput): Officer
    }
`;