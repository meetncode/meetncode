const OtherResolvers = {
  Mutation: {
    singleUpload: async (parent, { file }) => {
      const { stream, filename, mimetype, encoding } = await file;
      console.log(filename, mimetype)
      return { filename, mimetype, encoding };
    },
  },
}

module.exports = { OtherResolvers };