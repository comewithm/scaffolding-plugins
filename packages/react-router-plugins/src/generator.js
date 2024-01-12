import injectRouter from './injectRouter.js';
import injectApp from './injectApp.js';

export default function apply(api, options) {
  // render template file
  api.render(import.meta.url, './template');

  // transform code (main.jsx)
  api.transformCode('src/main.jsx', injectRouter, options);

  // transform code (App.jsx)
  api.transformCode('src/App.jsx', injectApp);

  // add dependencies to package.json
  api.addToPackageJSON({
    dependencies: {
      'react-router': '^6.20.1',
      'react-router-dom': '^6.20.1',
    },
  });
}
