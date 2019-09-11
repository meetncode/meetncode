const { gql } = require('apollo-server');

const LocationSchema = gql`
  type Location {
    country: String
    city: String
    locationCoordinates: Coordinates
    address: String
    enabled: Boolean
  }

  input LocationInput {
    country: String!
    city: String!
    locationCoordinates: CoordinatesInput
    address: String
  }

  type Coordinates {
    type: String!
    coordinates: [Float!]
  }

  input CoordinatesInput {
    type: String!
    coordinates: [Float!]
  }

  type File {
    filename: String!
    mimetype: String!
    url: String!
  }

  extend type Mutation {
    singleUpload(file: Upload!): File!
  }

`

module.exports = LocationSchema;