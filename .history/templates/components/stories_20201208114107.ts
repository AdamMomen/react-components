import React, { ComponentProps } from 'react';
import { {{upperCamelCase componentName}} } from '.';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: '{{upperCamelCase componentName}}',
  component: {{upperCamelCase componentName}},
  argTypes: []
};

export const Template: Story<ComponentProps<typeof >> = (args) => < {{upperCamelCase componentName}} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
}


//  export const Default = () => <{{upperCamelCase componentName}} prop="" />;