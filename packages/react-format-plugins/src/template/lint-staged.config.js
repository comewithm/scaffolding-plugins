module.exports = {
  '!(*.min).{js,jsx}': ['eslint --fix', 'prettier --write'],
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{css,less,scss}': ['prettier --write'],
};
