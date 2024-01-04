import injectRouter from './injectRouter.js';
export default function apply(api, options) {
    // render template file
    api.render('./template')

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
}