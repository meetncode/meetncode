import { client } from '../../index';

import MUTATION_UPLOAD_FILE from './mutationUploadFile.graphql';

const uploadImage = async (image) => {
  const res = await client.mutate({
    mutation: MUTATION_UPLOAD_FILE,
    variables: {
      image
    }
  })

  return res.data.singleUpload;
}

export default uploadImage;