import injectRouter from './injectRouter.js';

export default function apply(api, options) {
    // render template file
    api.render(import.meta.url, './template')

    // inject import
    const {routerMode} = options
    const mode = routerMode === 'history' ? 'BrowserRouter' : 'HashRouter'
    api.injectImport(
        api.injectFileName,
        `import {${mode} as Router} from 'react-router-dom;`
    )
    // transform code
    api.transformCode(
        api.injectFileName,
        injectRouter
    )

    // add dependencies to package.json
    api.addDependenciesToPackage({
        dependencies: {
            'react-router': '^5.3.4',
            'react-router-dom': '^5.3.4',
        }
    })
}