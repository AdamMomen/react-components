import React from 'react';
import { {{upperCamelCase componentName}} } from '.';



const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button'
}

export default {
  title: '{{upperCamelCase componentName}}',
  component: {{upperCamelCase componentName}},
  argTypes: [],
};

 export const Default = () => <{{upperCamelCase componentName}} prop="" />;
