

export default (file, api) => {
    const j = api.jscodeshift;
    const root = j(file.source)

    const appElement = root.find(j.FunctionDeclaration, {
        id: { name: 'App' }
    })

    const jsxElement = appElement.find(j.JSXElement, {
        openingElement: {
            name: { name: 'div' }
        }
    })

    jsxElement.replaceWith(path => {
        console.log(path)

        // 创建HashRouter JSXElement
        const routerElement = j.jsxElement(
            j.jsxOpeningElement(j.jsxIdentifier('Router'), []),
            j.jsxClosingElement(j.jsxIdentifier('Router')),
            [path.node]
        )

        return routerElement
    })

    return root.toSource()
}