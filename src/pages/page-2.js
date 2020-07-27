import React from 'react';
import MainLayout from 'layouts/main';
import Link from 'components/shared/link';

import ExampleInlineSVG from 'images/example.inline.svg';
import exampleUrlSvg from 'images/example.svg';

const IndexPage = () => (
  <MainLayout>
    <div className="container">
      Inline SVG: <ExampleInlineSVG />
      URL SVG: <img src={exampleUrlSvg} alt="" />
      <Link to="/">Back</Link>
    </div>
  </MainLayout>
);

export default IndexPage;
