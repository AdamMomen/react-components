import { NodePlopAPI } from 'plop';
import { createComponentGenerator } from './templates/generators/component';
import { upperCamelCase } from './templates/helpers';

export default function (plop) {

  plop.setHelper('upperCamelCase', upperCamelCase);

  plop.setGenerator('component', createComponentGenerator());
}
