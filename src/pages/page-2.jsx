import React from 'react';

import Link from 'components/shared/link';
import ExampleInlineSVG from 'images/example.inline.svg';
import exampleUrlSvg from 'images/example.svg';
import MainLayout from 'layouts/main';

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
