import React from 'react';

import Button from './button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  className: '',
  to: '',
  size: '',
  theme: '',
  children: 'Button!',
};
