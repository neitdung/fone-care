const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const db = require('./config/db');
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema }= require('@graphql-tools/schema');
const { resolvers } = require('./resolver');
const { typeDefs } = require('./schema');

// require('mongoose').set('debug', true);
db.connectToDb();

const app = express();
async function startServer() {
   const schema = makeExecutableSchema({
      typeDefs: typeDefs,
      resolvers: resolvers
    })
   const server = new ApolloServer(schema);
   await server.start();
   console.log(`gql path is ${server.graphqlPath}`);

   server.applyMiddleware({ app });
}

startServer();

app.get('/', (req, res) => {
    console.log("Apollo GraphQL Express server is ready");
});

app.listen({ port: PORT }, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});