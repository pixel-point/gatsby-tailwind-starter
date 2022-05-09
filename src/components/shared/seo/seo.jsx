import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, socialPreviewImage, canonicalUrl, pathname }) => {
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

  if (/\/$/.test(siteUrl)) {
    throw new Error(`siteUrl should not have trailing slash. Current siteUrl: ${siteUrl}`);
  }

  if (!pathname) {
    throw new Error(`pathname is a required prop`);
  }

  if (pathname !== '/' && !/^\/.+\/$/.test(pathname)) {
    throw new Error(
      `pathname should have slashes at the beginning and end. Passed pathname: ${pathname}`
    );
  }

  const currentUrl = pathname !== '/' ? `${siteUrl}${pathname}` : siteUrl;

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
  pathname: PropTypes.string.isRequired,
};

SEO.defaultProps = {
  canonicalUrl: null,
  socialPreviewImage: null,
};

export default SEO;
