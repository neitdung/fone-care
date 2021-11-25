const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const db = require('./config/db');
const { ApolloServer } = require('apollo-server-express');
const { officerResolvers } = require('./resolver/officer.resolver');
const { officerTypeDefs } = require('./schema/officer.schema');

// require('mongoose').set('debug', true);
db.connectToDb();



const app = express();
async function startServer() {
   const server = new ApolloServer(
      { 
         typeDefs: [officerTypeDefs],
         resolvers: [officerResolvers]
      }
   );
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