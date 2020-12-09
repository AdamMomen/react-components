import camelCase from 'camelcase';

export function requiredField(input: string) {
  if (input.trim()) {
    return true;
  }
  return 'This field is required';
}

export const upperCamelCase = (item: string) => {
  const camelized = camelCase(item);
  const firstLetter = `${camelized[0].toUpperCase()}`;
  return `${firstLetter}${camelized.slice(1)}`;
};
