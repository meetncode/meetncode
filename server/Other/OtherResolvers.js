const cloudinary = require("cloudinary").v2;

const OtherResolvers = {
  Mutation: {
    singleUpload: async (_, { file }) => {
      const { createReadStream, filename, mimetype, encoding } = await file;

      try {
        const result = await new Promise((resolve, reject) => {
          createReadStream().pipe(
            cloudinary.uploader.upload_stream((error, result) => {
              if (error) {
                reject(error);
              }
              resolve(result);
            })
          );
        });

        return {
          filename,
          url: result.secure_url,
          mimetype
        }
        return;
      } catch (err) {
        console.log(err);
      }
    }
  }
};

module.exports = { OtherResolvers };
