/* eslint-disable react/prop-types */
import React from 'react';

import Layout from 'components/shared/layout';
import Link from 'components/shared/link';

const AboutPage = ({ location: { pathname } }) => (
  <Layout
    seo={{
      title: 'About Us',
      description: 'About Us Description',
      slug: pathname,
    }}
  >
    <p>This is About Us page!</p>
    <Link to="/">Go back</Link>
  </Layout>
);

export default AboutPage;
