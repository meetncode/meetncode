const { Location } = require('./LocationModel');

const LocationResolvers = {
  Query: {
    getLocation: async(_, { id }) => {
      return await Location.findById(id);
    },
    getLocationByCity: async(_, { city }) => {
      return await Location.find({ city });
    },
  },
  Mutation: {
    createLocation: async(_, { input }) => {
      return await Location.create(input);
    },
    updateLocation: async(_, { id, input }) => {
      return await Location.findByIdAndUpdate(id, input, {
        new: true
      });
    }
  }
}

module.exports = { LocationResolvers };