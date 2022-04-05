import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'nglyj0ia',
  dataset: 'production',
  apiVersion: '2022-04-05',
  useCdn: true,
  token:
    'skzNr90jl6xmzlAA9PdAXBGWcoaOgXmx18TZSPyM2DBKKV7Req1uMjfvCBGt8YzY9drsslDRjTKOaE5VzXRim5xQABA17m3XsciyUNSLb22b0ZEFqHNWOqHEl4FQ33hHTIAo2QHpy34DNzQwAlDbuyknDjIz1tRdUbfu5Fb1DjPd0HLdWZYmskzNr90jl6xmzlAA9PdAXBGWcoaOgXmx18TZSPyM2DBKKV7Req1uMjfvCBGt8YzY9drsslDRjTKOaE5VzXRim5xQABA17m3XsciyUNSLb22b0ZEFqHNWOqHEl4FQ33hHTIAo2QHpy34DNzQwAlDbuyknDjIz1tRdUbfu5Fb1DjPd0HLdWZYm',
});
