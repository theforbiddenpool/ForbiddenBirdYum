module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-uses-react': 1,
    'react/prop-types': 0,
    'react/jsx-uses-vars': 1,
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
