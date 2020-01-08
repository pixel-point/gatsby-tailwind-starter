// seo-compoenent-specific fn that creates correct path for the og:image
// createMetaImagePath(image: Object|String, defautlSiteUrl: String, defaultImage: String) -> String
const createMetaImagePath = (image, defaultSiteUrl, defaultImage) => {
  switch (typeof image) {
    case 'object':
      return defaultSiteUrl + image.childImageSharp.fluid.src;
    case 'string':
      return defaultSiteUrl + image;
    default:
      return defaultSiteUrl + defaultImage;
  }
};

module.exports = {
  createMetaImagePath,
};
