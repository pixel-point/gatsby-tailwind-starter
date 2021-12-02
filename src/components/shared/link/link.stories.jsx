import React from 'react';

import Link from './link';

export default {
  title: 'Link',
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});

Default.args = {
  className: '',
  to: '',
  size: '',
  theme: '',
  children: 'Link!',
};
