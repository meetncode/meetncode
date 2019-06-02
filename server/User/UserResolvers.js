const { User } = require('./UserModel');
const { Location } = require('../Location/LocationModel');

const UserResolvers = {
  Query: {
    getUser: async(_, { id }) => {
      return await User.findById(id)
        .populate('events')
        .populate('categories')
        .populate('groups')
        .populate({ path: 'location', model: Location });
    },
    getUsersByGroup: async(_, { groupId }) => {
      return await User.find({ groups: { $in: groupId } })
        .populate('events')
        .populate('categories')
        .populate('groups')
        .populate('location');
    }
  },
  Mutation: {
    createUser: async (_, { input }) => {
      return await User.create(input);
    },
    updateUser: async (_, { id, input }) => {
      return await User.findByIdAndUpdate(id, input, {
          new: true
      });
    }
  }
}

module.exports = { UserResolvers };