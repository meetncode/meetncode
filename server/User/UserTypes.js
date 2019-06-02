const { gql } = require('apollo-server');

const UserSchema = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    location: Location
    hometown: String
    language: String
    birthday: String
    gender: String
    bio: String
    categories: [Category]
    events: [Event]
    groups: [Group]
    enabled: Boolean
    createdAt: String
    updatedAt: String
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input UserInput {
    firstName: String
    lastName: String
    email: String
    password: String
    location: ID
    hometown: String
    language: String
    birthday: String
    gender: String
    bio: String
    categories: [ID!]
    groups: [ID!]
    enabled: Boolean
  }

  type Query {
    getUser(id: ID!): User
    getUsersByGroup(groupId: ID!): [User]
  }

  type Mutation {
    createUser(input: CreateUserInput): User
    updateUser(id: ID! input: UserInput): User
  }
`

module.exports = UserSchema;