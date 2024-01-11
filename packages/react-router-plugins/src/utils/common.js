// insert imports dependencies
export function handleDependenciesImports(root, j, routerImport) {
    const declarations = root.find(j.ImportDeclaration)

    if(declarations.length) {
        declarations.at(-1).insertAfter([routerImport])
    } else {
        root.get().node.program.body.unshift(routerImport)
    }
}

// delete unused variables
export function deleteUnusedVariables(root, j, filters = {}) {
    return root.find(j.VariableDeclarator, filters)
}

// delte unused imports
export function deleteUnusedImports(root, j) {
    const imports = root.find(j.ImportDeclaration)

    imports.forEach((path) => {
        const importName = path.node.source.value

        const isStyleImport = /\.(css|less|scss)$/.test(importName);

        const isUsed = root.find(j.Identifier, {name: importName}).length > 0

        if(!isUsed && !isStyleImport) {
            // remove
            j(path).remove()
        }
    })
}