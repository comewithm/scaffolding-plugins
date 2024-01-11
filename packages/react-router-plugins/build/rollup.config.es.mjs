import base from './rollup.config.base.mjs'
import copy from 'rollup-plugin-copy'

const config = Object.assign({}, base, {
    output: {
        dir: 'dist/esm',
        format: 'es',
        sourcemap: false
    },
    preserveModules: true,
    plugins: [
        ...base.plugins,
        copy({
            targets: [{
                src: 'src/*',
                dest: 'dist/esm',
                // rename: (name) => name.replace(/^src\//, '')
            }]
        }),
    ]
})

export default config