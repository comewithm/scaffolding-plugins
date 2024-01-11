module.exports = {
  // extends: ["@commitlint/config-conventional"]
  '!(*.min).js': ['eslint --fix', 'prettier --write'],
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{css,less}': ['prettier --write'],
};
