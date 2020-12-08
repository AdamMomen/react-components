import React from 'react';
import { ExampleComponent } from '@teamhack/components'
import '@teamhack/components/dist/index.css'

export interface {{upperCamelCase componentName}}Props {
  prop: string
}

export const {{upperCamelCase componentName}} = ({ prop }: {{upperCamelCase componentName}}Props) => {
  return <ExampleComponent />
};
