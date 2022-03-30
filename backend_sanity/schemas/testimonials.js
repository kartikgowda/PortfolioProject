export default {
  name: `testimonials`,
  title: `Testimonials`,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: `Name`,
      type: 'string',
    },
    {
      name: 'company',
      title: `Company`,
      type: 'string',
    },
    {
      name: 'imageURL',
      title: `ImgURL`,
      type: 'image',
      //? HOTSPOT  https://www.sanity.io/docs/presenting-images
      options: {
        hotspot: true,
      },
    },
    {
      name: 'feedback',
      title: `Feedback`,
      type: 'string',
    },
  ],
};
