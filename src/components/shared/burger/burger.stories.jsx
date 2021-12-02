import React from 'react';

import Burger from './burger';

export default {
  title: 'Burger',
  component: Burger,
};

const Template = (args) => <Burger {...args} />;

export const Default = Template.bind({});

Default.args = {
  className: '',
  isToggled: false,
};
