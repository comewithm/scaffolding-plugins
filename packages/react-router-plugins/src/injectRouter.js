import { handleDependenciesImports } from './utils/common.js';

function handleRouterImports(root, j, options) {
  const { routerMode } = options;
  const mode = routerMode === 'history' ? 'BrowserRouter' : 'HashRouter';
  const routerImport = `import {${mode} as Router} from 'react-router-dom';`;

  handleDependenciesImports(root, j, routerImport);
}

function handleRouterCodes(root, j) {
  const appElement = root.find(j.JSXElement, {
    openingElement: {
      name: { name: 'App' },
    },
  });
  appElement.replaceWith((path) => {
    const router = j.jsxElement(
      j.jsxOpeningElement(j.jsxIdentifier('Router'), []),
      j.jsxClosingElement(j.jsxIdentifier('Router')),
      [path.node],
    );
    return router;
  });
}
// main.jsx
export default (file, api, options) => {
  console.log('api options:', options);
  const j = api.jscodeshift;
  const root = j(file.source);

  // handle router imports
  handleRouterImports(root, j, options);

  // add Router
  handleRouterCodes(root, j);

  return root.toSource();
};
