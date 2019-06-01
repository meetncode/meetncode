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
    categories: [ID!]
    groups: [ID!]
    enabled: Boolean
  }

  type Location {
    id: ID!
    country: String!
    city: String!
    location: Coordinates!
    enabled: Boolean
  }

  input LocationInput {
    country: String!
    city: String!
    location: CoordinatesInput!
    enabled: Boolean
  }

  type Coordinates {
    coordinates: [Int!]
  }

  input CoordinatesInput {
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

  input CategoryInput {
    name: String!
    description: String!
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

  input GroupInput {
    name: String
    description: String
    private: Boolean
    category: CategoryInput
    events: [ID!]
    admin: ID!
    members: [ID!]
    enabled: Boolean
  }

  type Event {
    id: ID!
    name: String!
    host: User!
    description: String!
    attendees: [User]
    location: Location!
  }

  input EventInput {
    name: String
    host: ID
    description: String
    attendees: [ID]
    location: ID
  }

  type Query {
    getUser(id: ID!): User
    getUsersByGroup(groupId: ID!): [User]
    getEvent(id:ID!): Event
    getEventsByHost(hostId: ID!): [Event]
    getEventsByLocation(country: String, city: String): [Event]
    getGroup(id: ID!): Group
    getGroupsByCategory(categoryId: ID!): [Group]
    getGroupsByLocation(country: String, city: String): [Group]
    getCategory(id: ID!): Category
    getCategories: [Category]  
  }

  type Mutation {
    createUser(input: CreateUserInput): User
    updateUser(id: ID! input: UserInput): User
    createEvent(input: EventInput): Event
    updateEvent(id: ID! input: EventInput): Event
    createGroup(input: GroupInput): Group
    updateGroup(id: ID! input: GroupInput): Group
    createCategory(input: CategoryInput): Group
    updateCategory(id: ID! input: CategoryInput): Group
  }
`

module.exports = schema;