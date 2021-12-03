import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import MobileMenu from 'components/shared/mobile-menu';
import SEO from 'components/shared/seo';

const Layout = ({ seo, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {seo && <SEO {...seo} />}
      <div className="flex flex-col min-h-screen">
        <Header isMobileMenuOpen={isMobileMenuOpen} onBurgerClick={handleHeaderBurgerClick} />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileMenu isOpen={isMobileMenuOpen} />
      </div>
    </>
  );
};

Layout.propTypes = {
  seo: PropTypes.object,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  seo: null,
};

export const query = graphql`
  fragment wpPageSeo on WpPage {
    seo {
      title
      metaDesc
      metaKeywords
      metaRobotsNoindex
      canonical
      opengraphTitle
      opengraphDescription
      opengraphImage {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FIXED, height: 630, width: 1200, formats: JPG)
          }
        }
      }
      opengraphUrl
    }
  }
`;

export default Layout;
