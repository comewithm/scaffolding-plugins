import base from './rollup.config.base.mjs'
import copy from 'rollup-plugin-copy'


const config = Object.assign({}, base, {
    output: {
        dir: 'dist/cjs',
        format: 'cjs',
        exports: 'auto', // 明确指定 CommonJS 导出模式
        sourcemap: false
    },
    preserveModules: true,
    plugins: [
        ...base.plugins,
        copy({
            targets: [{
                src: 'src/*',
                dest: 'dist/cjs',
                // rename: (name) => name.replace(/^src\//, '')
            }]
        })
    ]
})

export default config