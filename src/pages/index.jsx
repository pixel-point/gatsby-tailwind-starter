/* eslint-disable react/prop-types */
import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const HomePage = () => <Layout>Hello world!</Layout>;

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
