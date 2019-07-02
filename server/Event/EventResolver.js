const { Event } = require('./EventModel');

const EventResolvers = {
  Query: {
    getEvent: async(_, { id }) => {
      return await Event.findById(id).populate('host').populate('attendees');
    },
    getEvents: async(_, { input }) => {
      const filter = {};
      
      if(input) {
        const {
          isUpcoming,
          hostId,
          country,
          city,
          attendees
        } = input;
  
        if(isUpcoming) filter.date = { $gte: new Date() };
        if(hostId) filter.host = hostId;
        if(country) filter.country = country;
        if(city) filter.city = city;
        if(attendees) filter.attendees = { $all: attendees };
      }

      return await Event.find(filter).populate('host').populate('attendees');
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