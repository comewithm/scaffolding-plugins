import {
  deleteUnusedImports,
  deleteUnusedVariables,
  handleDependenciesImports,
} from './utils/common.js';

function handleAppCode(root, j) {
  const appElement = root.find(j.FunctionDeclaration, {
    id: { name: 'App' },
  });

  const returnStatement = appElement.find(j.ReturnStatement);
  // return code
  returnStatement.forEach((path) => {
    const hasParentheses = path.value.argument.type === 'JSXElement';

    const routesElement = j.jsxElement(
      j.jsxOpeningElement(j.jsxIdentifier('Routes'), [], true),
      null,
      [],
    );

    if (hasParentheses) {
      j(path).replaceWith(routesElement);
    } else {
      j(path).replaceWith(j.returnStatement(routesElement));
    }
  });

  // other unused variables
  const variableDeclarations = deleteUnusedVariables(appElement, j);
  variableDeclarations.remove();
}

export default (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  const routerImport = `import Routes from './router.jsx';`;

  // 1.find App function
  // 2.replace children with <Routes />
  handleAppCode(root, j);
  // 3.add imports
  handleDependenciesImports(root, j, routerImport);
  // 4.delete unused imports
  deleteUnusedImports(root, j);
  return root.toSource();
};
