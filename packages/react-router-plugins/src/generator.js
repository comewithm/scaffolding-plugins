import injectRouter from './injectRouter.js';

export default function apply(api, options) {
    // render template file
    api.render(import.meta.url, './template')

    // transform code
    api.transformCode(
        api.injectFileName,
        injectRouter,
        options
    )

    // add dependencies to package.json
    api.addDependenciesToPackage({
        dependencies: {
            'react-router': '^5.3.4',
            'react-router-dom': '^5.3.4',
        }
    })
}