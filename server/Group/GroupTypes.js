const { gql } = require('apollo-server');

const GroupSchema = gql`

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

  extend type Query {
    getGroup(id: ID!): Group
    getGroupsByCategory(categoryId: ID!): [Group]
    getGroupsByLocation(country: String, city: String): [Group]
  }

  extend type Mutation {
    createGroup(input: GroupInput): Group
    updateGroup(id: ID! input: GroupInput): Group
  }
`

module.exports = GroupSchema;