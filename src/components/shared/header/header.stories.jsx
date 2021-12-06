import React from 'react';

import Header from './header';

export default {
  title: 'Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  isMobileMenuOpen: false,
};
