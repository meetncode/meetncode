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
      const event =  await Event.create(input);
      return event.populate('host').populate('attendees').execPopulate();
    },
    updateEvent: async (_, { id, input }) => {
      return await Event.findByIdAndUpdate(id, input, {
          new: true
        }).populate('host').populate('attendees');
    }
  }
}

module.exports = { EventResolvers };