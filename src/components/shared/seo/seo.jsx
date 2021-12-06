// TODO: Remove "no-undef" once WordPress is set up
/* eslint-disable react/prop-types, no-undef */
// TODO: Uncomment once WordPress is set up
// import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = (props) => {
  const {
    title,
    metaDesc,
    metaKeywords,
    metaRobotsNoindex,
    canonical,
    opengraphTitle,
    opengraphDescription,
    opengraphImage,
    opengraphUrl,
  } = props;

  // TODO: Uncomment once WordPress is set up
  // const {
  //   wp: {
  //     generalSettings: { language: siteLanguage },
  //   },
  //   site: {
  //     siteMetadata: { siteUrl, siteDescription, siteImage },
  //   },
  // } = useStaticQuery(graphql`
  //   query {
  //     wp {
  //       generalSettings {
  //         language
  //       }
  //     }
  //     site {
  //       siteMetadata {
  //         siteUrl
  //         siteDescription
  //         siteImage
  //       }
  //     }
  //   }
  // `);

  const opengraphPreviewImage = opengraphImage
    ? siteUrl + opengraphImage.localFile.childImageSharp.gatsbyImageData.images.fallback.src
    : siteUrl + siteImage;

  const isRobotsNoindexPage = metaRobotsNoindex === 'noindex';

  return (
    <Helmet
      title={title}
      htmlAttributes={{
        lang: siteLanguage,
        prefix: 'og: http://ogp.me/ns#',
      }}
    >
      {/* General */}
      <meta name="description" content={metaDesc} />
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}
      {isRobotsNoindexPage && <meta name="robots" content="noindex" />}
      {canonical.startsWith(siteUrl) && <link rel="canonical" href={canonical} />}
      {/* Open Graph */}
      <meta property="og:title" content={opengraphTitle || title} />
      <meta property="og:description" content={opengraphDescription || siteDescription} />
      <meta property="og:url" content={siteUrl + opengraphUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={opengraphPreviewImage} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default SEO;
