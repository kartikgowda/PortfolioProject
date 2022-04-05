import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

//* https://www.sanity.io/docs/api-versioning

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-04-03',
  token: process.env.REACT_APP_SANITY_TOKEN,
  useCdn: true,
});

//? For Importing Images
const builder = imageUrlBuilder(client);

//? Exporting Images
export const urlFor = (source) => builder.image(source);
