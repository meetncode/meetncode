const { Event } = require('./EventModel');

const EventResolvers = {
  Query: {
    getEvent: async(_, { id }) => {
      return await Event.findById(id).populate('host').populate({ path: 'group', populate: { path: 'members' }}).populate('attendees');
    },
    getEvents: async(_, { input }) => {
      const filter = {};
      
      if(input) {
        const {
          isUpcoming,
          hostId,
          groupId,
          country,
          city,
          attendees
        } = input;
  
        if(isUpcoming) filter.date = { $gte: new Date() };
        if(hostId) filter.host = hostId;
        if(groupId) filter.group = groupId;
        if(country) filter.country = country;
        if(city) filter.city = city;
        if(attendees) filter.attendees = { $all: attendees };
      }
      return await Event.find(filter).populate('host').populate({ path: 'group', populate: { path: 'members' }}).populate('attendees');
    },
  },
  Mutation: {
    createEvent: async (_, { input }, { isAuth }) => {
      if(!isAuth) throw Error('You are not authorized to do this');
      const event =  await Event.create(input);
      return event.populate('host').populate('attendees').populate('group').execPopulate();
    },
    updateEvent: async (_, { id, input }, { isAuth }) => {
      // TODO: only allow host to update the event
      if(!isAuth) throw Error('You are not authorized to do this');
      return await Event.findByIdAndUpdate(id, input, {
          new: true
        }).populate('host').populate('group').populate('attendees').execPopulate();
    }
  }
}

module.exports = { EventResolvers };