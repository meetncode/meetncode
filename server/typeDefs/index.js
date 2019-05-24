const { gql } = require('apollo-server');

const schema = gql`
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
    categories: [ID]
    groups: [ID]
    enabled: Boolean
    createdAt: String
    updatedAt: String
  }

  type Location {
    id: ID!
    country: String!
    city: String!
    location: Coordinates!
    enabled: Boolean
  }

  type Coordinates {
    coordinates: [Int!]
  }

  type Category {
    id: ID!
    name: String!
    description: String!
    createdAt: String!
    updatedAt: String!
    enabled: Boolean!
  }

  type Group {
    id: ID!
    name: String!
    description: String!
    private: Boolean!
    category: Category
    events: [Event!]
    admin: User!
    members: [User!]
    createdAt: String!
    updatedAt: String!
    enabled: Boolean!
  }

  type Event {
    id: ID!
    name: String!
    description: String!
    attendees: [User]
    location: Location!

  }

  type Query {
    getUser(id: ID!): User
    getUsersByGroup(groupId: ID!): [User]
  }

  type Mutation {
    createUser(input: CreateUserInput): User
    updateUser(id: ID!, input: UserInput): User
  }
`

module.exports = schema;