const { gql } = require('apollo-server');

const LocationSchema = gql`
  type Location {
    country: String!
    city: String!
    locationCoordinates: Coordinates!
    address: String
    enabled: Boolean
  }

  input LocationInput {
    country: String!
    city: String!
    locationCoordinates: CoordinatesInput!
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

  extend type Query {
    getLocation(id: ID): Location
    getLocationByCity(city: String): [Location]
  }

  extend type Mutation {
    createLocation(input: LocationInput): Location
    updateLocation(id: ID, input: LocationInput): Location
  }
`

module.exports = LocationSchema;