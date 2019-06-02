const { Group } =  require('./GroupModel');

const GroupResolvers = {
  Query: {
    getGroup: async(_, { id }) => {
      return await Group.findById(id)
        .populate('category')
        .populate('events')
        .populate('admin')
        .populate('members');
    },
    getGroupsByCategory: async(_, { categoryId }) => {
      return await Group.find({ category: categoryId })
        .populate('category')
        .populate('events')
        .populate('admin')
        .populate('members');
    },
    getGroupsByLocation: async(_, { country, city }) => {
      return await Group.find({ $or:[{ country }, { city }]})
        .populate('category')
        .populate('events')
        .populate('admin')
        .populate('members');
    },
  },
  Mutation: {
    createGroup: async (_, { input }) => {
      return await Group.create(input)
        .populate('category')
        .populate('events')
        .populate('admin')
        .populate('members');
    },
    updateGroup: async (_, { id, input }) => {
      return await Group.findByIdAndUpdate(id, input, {
          new: true
      })
        .populate('category')
        .populate('events')
        .populate('admin')
        .populate('members');
    }
  }
}

module.exports = { GroupResolvers };