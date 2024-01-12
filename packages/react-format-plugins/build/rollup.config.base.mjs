import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
    input: './src/index.js',
    plugins: [
        resolve(),
        commonjs({
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
    ],
}