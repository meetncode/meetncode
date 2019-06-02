const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

require('dotenv').config()

const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const uri = process.env.DATABASE_URI;

mongoose.connect(uri, { useNewUrlParser: true })
.then(console.log('Connected to database'))
.catch(err => console.log(err));

const server = new ApolloServer({ typeDefs, resolvers });

server.listen()
.then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})