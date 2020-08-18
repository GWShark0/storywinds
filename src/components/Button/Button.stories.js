import React from 'react';

import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  variant: 'secondary',
};

export const Light = Template.bind({});
Light.args = {
  children: 'Button',
  variant: 'light',
};
Light.parameters = {
  backgrounds: { default: 'dark' },
};

export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
  children: 'Button',
  variant: 'outline-primary',
};
OutlinePrimary.parameters = {
  backgrounds: { default: 'dark' },
};

export const OutlineSecondary = Template.bind({});
OutlineSecondary.args = {
  children: 'Button',
  variant: 'outline-secondary',
};

export const OutlineLight = Template.bind({});
OutlineLight.args = {
  children: 'Button',
  variant: 'outline-light',
};
OutlineLight.parameters = {
  backgrounds: { default: 'dark' },
};

export const Squared = Template.bind({});
Squared.args = {
  children: 'Button',
  squared: true,
  variant: 'secondary',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Button',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Button',
  size: 'lg',
};
