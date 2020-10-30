import React from 'react';

import Link from 'components/shared/link';
import MainLayout from 'layouts/main';

const IndexPage = () => (
  <MainLayout>
    <div className="container">
      <div className="columns">
        <div className="column">1</div>
        <div className="column">2</div>
        <div className="column">3</div>
      </div>

      <Link to="/page-2">Page 2</Link>
    </div>
  </MainLayout>
);

export default IndexPage;
