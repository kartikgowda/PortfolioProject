import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-04-05',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN_ID,
});

//? For Importing Images
const builder = imageUrlBuilder(client);

//? Exporting Images

export const urlFor = (source) => builder.image(source);
