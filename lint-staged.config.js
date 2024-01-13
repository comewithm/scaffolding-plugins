module.exports = {
  // extends: ["@commitlint/config-conventional"]
  '!(*.min).{js,mjs,cjs}': ['eslint --fix', 'prettier --write'],
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{css,less,scss}': ['prettier --write'],
};
