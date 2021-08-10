module.exports = {
  clearMocks: true,
  verbose: true,
  transform: {
    '^.+\\jsx?$': 'babel-jest',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  testPathIgnorePatterns: [
    'node_modules',
    'public',
    'coverage', 
    'jest.config.js',
    'storybook-static',
    '.storybook'
  ],
  setupFiles: [
    'dotenv/config'
  ],
  collectCoverage: false,
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!coverage/**', '!public/**', '!functions/**'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  watchman: true,
  testEnvironment: 'jsdom'
};