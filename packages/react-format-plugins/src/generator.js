export default function apply(api, options) {
  api.render(import.meta.url, './template');

  // 添加脚本命令???
  // "husky": "husky install"

  api.addToPackageJSON({
    devDependencies: {
      '@babel/core': '^7.23.7',
      '@babel/eslint-parser': '^7.23.3',
      '@babel/preset-env': '^7.23.7',
      '@commitlint/cli': '^18.4.4',
      '@commitlint/config-conventional': '^18.4.4',
      'babel-eslint': '^10.1.0',
      eslint: '^8.56.0',
      'eslint-config-prettier': '^9.1.0',
      'eslint-plugin-prettier': '^5.1.3',
      husky: '^8.0.3',
      'lint-staged': '^15.2.0',
      prettier: '^3.1.1',
    },
    script: {
      husky: 'husky install',
      'husky:gitHooks': "npx husky add .husky/pre-commit 'npm run lint'",
      'husky:commit': `npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`,
      lint: 'lint-staged',
    },
  });
}
