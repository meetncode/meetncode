const { Event } = require('./EventModel');

const EventResolvers = {
  Query: {
    getEvent: async(_, { id }) => {
      return await Event.findById(id).populate('host').populate('attendees');
    },
    getEventsByHost: async(_, { hostId }) => {
      return await Event.find({ host: hostId }).populate('host').populate('attendees');;
    },
    getEventsByLocation: async(_, { country, city }) => {
      return await Event.find({ $or:[{ country }, { city }]}).populate('host').populate('attendees');;
    },
  },
  Mutation: {
    createEvent: async (_, { input }) => {
      return await Event.create(input).populate('host').populate('attendees');
    },
    updateEvent: async (_, { id, input }) => {
      return await Event.findByIdAndUpdate(id, input, {
          new: true
        }).populate('host').populate('attendees');
    }
  }
}

module.exports = { EventResolvers };