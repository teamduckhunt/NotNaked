const config = {
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
    '^.+\\.(svg|png)$': '<rootDir>/svgTransform.js',

  },
  testEnvironment: 'jsdom',
};

module.exports = config;
