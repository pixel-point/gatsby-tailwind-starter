/* eslint-disable react/prop-types */
import React from 'react';

import Layout from 'components/shared/layout';
import Link from 'components/shared/link';

const HomePage = ({ location: { pathname } }) => (
  <Layout
    seo={{
      title: 'Title',
      description: 'Description',
      pathname,
    }}
  >
    <p>This is Home page!</p>
    <Link to="/about">Check out our About Us page!</Link>
  </Layout>
);

export default HomePage;
