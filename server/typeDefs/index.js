const { gql } = require('apollo-server');

const schema = gql`
  type User {
    id: ID
    firstName: String!
    lastName: String!
  }

  type Query {
    getUser: [User]
  }
`

module.exports = schema;