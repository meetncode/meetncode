const { Group } =  require('./GroupModel');

const GroupResolvers = {
  Query: {
    getGroup: async(_, { id }) => {
      return await Group.findById(id)
      .populate('category')
      .populate({
        path: 'events',
        populate: {
          path: 'host attendees'
        }
      })
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
    createGroup: async (_, { input }, { isAuth }) => {
      if(!isAuth) throw Error('You are not authorized to do this');
      const group =  await Group.create(input);
      return await group.populate('category')
        .populate('events')
        .populate('admin')
        .populate('members').execPopulate();
    },
    updateGroup: async (_, { id, input }, { isAuth }) => {
      if(!isAuth) throw Error('You are not authorized to do this');
      // TODO:protect to only allow the admin to update
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