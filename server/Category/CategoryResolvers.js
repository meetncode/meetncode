const { Category } = require('./CategoryModel');

const CategoryResolvers = {
  Query: {
    getCategory: async(_, { id }) => {
      return await Category.findById(id)
    },
    getCategories: async() => {
      return await Category.find();
    }
  },
  Mutation: {
    createCategory: async (_, { input }) => {
      return await Category.create(input)
    },
    updateCategory: async (_, { id, input }) => {
      return await Category.findByIdAndUpdate(id, input, {
          new: true
      })
    }
  }
}

module.exports = { CategoryResolvers };