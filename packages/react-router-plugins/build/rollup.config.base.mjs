import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { glob } from 'glob';
import { fileURLToPath } from 'node:url';
import { relative, join, dirname, extname } from 'node:path';

export default {
  // input: 'src/index.js',
  input: Object.fromEntries(
    glob.sync(['src/**/*.js'], { ignore: 'src/template/**' }).map((file) => {
      const filename = relative(
        'src',
        file.slice(0, file.length - extname(file).length),
      );
      const newpath = fileURLToPath(
        new URL(file, join(dirname(import.meta.url), '../src')),
      );
      // console.log('filename',file, filename, newpath, path.join(path.dirname(import.meta.url), '../src'))
      return [filename, newpath];
    }),
  ),
  plugins: [
    resolve(),
    commonjs({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    // babel({
    //     exclude: 'node_modules/**',
    //     babelHelpers: 'bundled'
    // }),
  ],
};
