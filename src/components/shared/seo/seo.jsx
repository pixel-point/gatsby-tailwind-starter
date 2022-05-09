import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, socialPreviewImage, canonicalUrl, slug }) => {
  const {
    site: {
      siteMetadata: { siteTitle, siteDescription, siteUrl, siteImage, siteLanguage },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteDescription
          siteUrl
          siteImage
          siteLanguage
        }
      }
    }
  `);

  if (slug !== '/' && !/^\/.+\/$/.test(slug)) {
    throw new Error(`slug should have slashes at the beginning and end. Passed slug: ${slug}`);
  }

  const currentUrl = slug !== '/' ? `${siteUrl}${slug}` : siteUrl;

  return (
    <Helmet
      title={title || siteTitle}
      htmlAttributes={{
        lang: siteLanguage,
        prefix: 'og: http://ogp.me/ns#',
      }}
    >
      {/* General */}
      <meta name="description" content={description || siteDescription} />
      {/* Open Graph */}
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || siteDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={socialPreviewImage || siteUrl + siteImage} />
      <meta property="og:type" content="website" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl || currentUrl} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  socialPreviewImage: PropTypes.string,
  canonicalUrl: PropTypes.string,
  slug: PropTypes.string.isRequired,
};

SEO.defaultProps = {
  canonicalUrl: null,
  socialPreviewImage: null,
};

export default SEO;
