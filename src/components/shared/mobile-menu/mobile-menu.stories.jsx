import React from 'react';

import MobileMenu from './mobile-menu';

export default {
  title: 'MobileMenu',
  component: MobileMenu,
};

const Template = (args) => <MobileMenu {...args} />;

export const Default = Template.bind({});

Default.args = {
  isOpen: false,
};
