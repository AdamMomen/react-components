import path from 'path'

export const createComponentGenerator = () => {
  return {
    description: 'Creates a component with a storybook file',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message:
          "Your new components's name in camelCase? (e.g. MyAmazingThingDisplayer)",
        validate: (input: string) => {
          if (input.trim()) {
            return true
          }
          return 'Name is required'
        }
      },
      {
        type: 'directory',
        name: 'path',
        message:
          'What directory do you want your file in? (e.g. common/components)',
        basePath: path.join(process.cwd(), 'src')
      }
    ],
    actions: [
      {
        type: 'add',
        path: `${process.cwd()}/src/{{path}}/{{dashCase componentName}}/index.ts`,
        templateFile: './templates/component/index.ts'
      },
      {
        type: 'add',
        path: `${process.cwd()}/src/{{path}}/{{dashCase componentName}}/{{dashCase componentName}}.tsx`,
        templateFile: './templates/component/component.ts'
      },
      {
        type: 'add',
        path: `${process.cwd()}/src/{{path}}/{{dashCase componentName}}/tests/{{dashCase componentName}}.test.tsx`,
        templateFile: './templates/component/test.ts'
      },
      {
        type: 'add',
        path: `${process.cwd()}/src/{{path}}/{{dashCase componentName}}/{{dashCase componentName}}.stories.tsx`,
        templateFile: './templates/component/stories.ts'
      }
    ]
  }
}
