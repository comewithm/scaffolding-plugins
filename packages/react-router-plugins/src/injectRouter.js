

export default (file, api, options) => {
    console.log('api options:', options)
    const j = api.jscodeshift;
    const root = j(file.source)

    const {routerMode} = options
    const mode = routerMode === 'history' ? 'BrowserRouter' : 'HashRouter'
    const routerImport = `import {${mode} as Router} from 'react-router-dom';`
    
    // inject import
    const declarations = root.find(j.ImportDeclaration)

    if(declarations.length) {
        declarations.at(-1).insertAfter([routerImport])
    } else {
        root.get().node.program.body.unshift(routerImport)
    }

    // add Router
    const appElement = root.find(j.JSXElement, {
        openingElement: {
            name: { name: 'App' }
        }
    })

    appElement.replaceWith((path) => {
        const router = j.jsxElement(
            j.jsxOpeningElement(j.jsxIdentifier('Router'), []),
            j.jsxClosingElement(j.jsxIdentifier('Router')),
            [path.node],
        )
        return router
    })


    return root.toSource()
}