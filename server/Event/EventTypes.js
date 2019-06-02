const { gql } = require('apollo-server');

const EventSchema = gql`

  type Event {
    id: ID!
    name: String!
    host: User!
    description: String!
    attendees: [User]
    location: Location!
    date: String!
  }

  input EventInput {
    name: String
    host: ID
    description: String
    attendees: [ID]
    location: ID
    date: String!
  }

  extend type Query {
    getEvent(id:ID!): Event
    getEventsByHost(hostId: ID!): [Event]
    getEventsByLocation(country: String, city: String): [Event] 
  }

  extend type Mutation {
    createEvent(input: EventInput): Event
    updateEvent(id: ID! input: EventInput): Event
  }
`

module.exports = EventSchema;