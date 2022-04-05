import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

//* https://www.sanity.io/docs/api-versioning

export const client = sanityClient({
  // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  projectId: 'nglyj0ia',
  dataset: 'production',
  apiVersion: '2022-04-03',
  // token: process.env.REACT_APP_SANITY_TOKEN,
  token:
    'skPu5V9Wow9PCVSxOAyjuuJjMTFhJk02lqAx9CmOaSVbtHdOF0dmc1CqyCz9cRivqMwaeDzKi6i0jMqSbEgxvMdsaSxc5OnY7nGduLOVw07CZSLUkm4jVwsAK8KRO3dNG7tWheVY25WZ6ez5liwYCe634ONBNtuRKvHP9YoNmkUuHD0iLCJE',
  useCdn: true,
});

//? For Importing Images
const builder = imageUrlBuilder(client);

//? Exporting Images

export const urlFor = (source) => builder.image(source);
