import { NodePlopAPI } from 'plop';
const  { createComponentGenerator }  = require('./templates/generators/component') ;
const  { upperCamelCase}  = require('./templates/helpers') ;

// export default function(plop: NodePlopAPI) {

// }
module.exports = function (plop: NodePlopAPI) {
	// controller generator

  plop.setHelper('upperCamelCase', upperCamelCase);

  plop.setGenerator('component', createComponentGenerator());
};
