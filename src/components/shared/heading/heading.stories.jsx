import React from 'react';

import Heading from './heading';

export default {
  title: 'Heading',
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});

Default.args = {
  className: '',
  tag: 'h1',
  size: '',
  theme: '',
  asHTML: false,
  children: 'Heading!',
};
