module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  modulePathIgnorePatterns: ['./build'],
};
