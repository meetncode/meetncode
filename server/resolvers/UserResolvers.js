const { User } = require('../models/User');

const UserResolvers = {
  Query: {
    getUser: async(_, { id }) => {
      return await User.findById(id)
    },
    getUsersByGroup: async(_, { groupId }) => {
      return await User.find({ groups: { $in: groupId } })
    }
  },
  Mutation: {
    createUser: async (_, { input }) => {
      return await User.create(input)
      
    },
    updateUser: async (_, { id, input }) => {
      return await User.findByIdAndUpdate(id, input, {
          new: true
        })
    }
  }
}

module.exports = { UserResolvers };