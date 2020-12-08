import React from 'react';
import { {{upperCamelCase componentName}} } from '.';


import React from 'react'

import { Button } from './Button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button'
}

export default {
  title: '{{upperCamelCase componentName}}',
  component: {{upperCamelCase componentName}},
  decorators: [],
};

export const Default = () => <{{upperCamelCase componentName}} prop="" />;
