const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const isAuth = require('./middleware/isAuth');

require('dotenv').config()

const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const uri = process.env.DATABASE_URI;

mongoose.connect(uri, { useNewUrlParser: true })
.then(console.log('Connected to database'))
.catch(err => console.log(err));

mongoose.set('useFindAndModify', false);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: isAuth
});

server.listen()
.then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})