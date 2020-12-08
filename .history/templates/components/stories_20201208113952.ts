import React from 'react';
import { {{upperCamelCase componentName}} } from '.';


export default {
  title: '{{upperCamelCase componentName}}',
  component: {{upperCamelCase componentName}},
  argTypes: []
};

export const Template = (args) => < {{upperCamelCase componentName}} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
}


//  export const Default = () => <{{upperCamelCase componentName}} prop="" />;
