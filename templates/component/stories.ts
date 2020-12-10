import React, { ComponentProps } from 'react';
import { {{upperCamelCase componentName}}, {{upperCamelCase componentName}}Props } from '.';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: '{{upperCamelCase componentName}}',
  component: {{upperCamelCase componentName}},
};

export const Template: Story<ComponentProps<typeof {{upperCamelCase componentName}}Props > = (args) => < {{upperCamelCase componentName}} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
}


//  export const Default = () => <{{upperCamelCase componentName}} prop="" />;
