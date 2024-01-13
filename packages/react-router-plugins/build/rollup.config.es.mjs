import base from './rollup.config.base.mjs';
import copy from 'rollup-plugin-copy';

const config = Object.assign({}, base, {
  output: {
    dir: 'dist/esm',
    format: 'es',
    sourcemap: false,
  },
  plugins: [
    ...base.plugins,
    copy({
      targets: [
        {
          src: 'src/*',
          dest: 'dist/esm',
        },
      ],
    }),
  ],
});

export default config;
