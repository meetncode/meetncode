const { Group } =  require('../models/Group');

const GroupResolvers = {
  Query: {
    getGroup: async(_, { id }) => {
      return await Group.findById(id)
    },
    getGroupsByCategory: async(_, { categoryId }) => {
      return await Group.find({ category: categoryId })
    },
    getGroupsByLocation: async(_, { country, city }) => {
      return await Group.find({ $or:[{ country }, { city }]});
    },
  },
  Mutation: {
    createGroup: async (_, { input }) => {
      return await Group.create(input)
    },
    updateGroup: async (_, { id, input }) => {
      return await Group.findByIdAndUpdate(id, input, {
          new: true
        })
    }
  }
}

module.exports = { GroupResolvers };