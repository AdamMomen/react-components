import React from 'react';
import { {{upperCamelCase componentName}} } from '.';

describe('{{upperCamelCase componentName}}', () => {
  const props = {
    prop: 'test'
  }

  it('does something', () => {
    const { getByText } = render(<{{upperCamelCase componentName}} {...props} />);
  })
})
