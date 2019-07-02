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

  input UpdateEventInput {
    name: String
    host: ID
    description: String
    attendees: [ID]
    location: ID
    date: String
  }

  input CreateEventInput {
    name: String!
    host: ID!
    description: String!
    attendees: [ID]
    location: ID!
    date: String!
  }

  input GetEventsInput {
    isUpcoming: Boolean
    hostId: ID
    country: String
    city: String
    attendees: [ID!]
  }

  extend type Query {
    getEvent(id:ID!): Event
    getEvents(input: GetEventsInput): [Event]
  }

  extend type Mutation {
    createEvent(input: CreateEventInput): Event
    updateEvent(id: ID! input: UpdateEventInput): Event
  }
`

module.exports = EventSchema;