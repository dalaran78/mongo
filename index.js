const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');

const MONGODB = "mongodb+srv://userdb:Password1@cluster0.2vgx4tn.mongodb.net/?retryWrites=true&w=majority"

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

mongoose.connect(MONGODB, {useNewUrlParser: true})
  .then(() => {
    console.log("MongoDB Connection successful");
    return server.listen({port: 5000})
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  })
