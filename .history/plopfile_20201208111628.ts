import dotenv from 'dotenv';
// import { NodePlopAPI } from 'plop';
// import { createComponentGenerator } from './templates/generators/component';
// import { createInitGenerator } from './templates/generators/init';
// import { createSecretsGenerator } from './templates/generators/secrets';
// import { env, upperCamelCase } from './templates/helpers';

export default function (plop: NodePlopAPI) {
  dotenv.config();

  plop.setHelper('upperCamelCase', upperCamelCase);
  plop.setHelper('env', env);

  plop.setGenerator('component', createComponentGenerator());
  plop.setGenerator('secrets', createSecretsGenerator());
  plop.setGenerator('init', createInitGenerator());
}
