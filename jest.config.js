module.exports = {
  preset: null,
  globals: {
    'vue-jest': {
      hideStyleWarn: true,
      experimentalCSSCompile: false,
    },
  },
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    'vee-validate/dist/rules': 'babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!vee-validate/dist/rules)',
  ],
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/components/**/*.vue', '<rootDir>/src/pages/**/*.vue'],
  testEnvironment: 'jsdom',
  snapshotSerializers: ['jest-serializer-vue'],
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.js'],
};
