const { User } = require('../models/User');

const resolvers = {
  Query: {
    getUser: async (_, args) => {
      const fakeUser = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe'
      }
      return fakeUser;
    },
  },
}

module.exports = resolvers;