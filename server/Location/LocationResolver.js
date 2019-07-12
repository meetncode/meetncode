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
    createLocation: async(_, { input }, { isAuth }) => {
      if(!isAuth) throw Error('You are not authorized to do this');
      return await Location.create(input);
    },
    updateLocation: async(_, { id, input }, { isAuth }) => {
      if(!isAuth) throw Error('You are not authorized to do this');
      return await Location.findByIdAndUpdate(id, input, {
        new: true
      });
    }
  }
}

module.exports = { LocationResolvers };