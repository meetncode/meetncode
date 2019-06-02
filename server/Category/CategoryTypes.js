const { gql } = require('apollo-server');

const CategorySchema = gql`
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

  extend type Query {
    getCategory(id: ID!): Category
    getCategories: [Category]  
  }

  extend type Mutation {
    createCategory(input: CategoryInput): Group
    updateCategory(id: ID! input: CategoryInput): Group
  }
`

module.exports = CategorySchema;