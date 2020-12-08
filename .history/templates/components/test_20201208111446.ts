import React from 'react';
import { render } from 'react-native-testing-library';
import { {{upperCamelCase componentName}} } from '.';

describe('{{upperCamelCase componentName}}', () => {
  const props = {
    prop: 'test'
  }

  it('does something', () => {
    const { getByText } = render(<{{upperCamelCase componentName}} {...props} />);
  })
})
