const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/components/(.*): '<rootDir>/src/components/$1',
    '^@/pages/(.*): '<rootDir>/src/pages/$1',
    '^@/utils/(.*): '<rootDir>/src/utils/$1',
    '^@/hooks/(.*): '<rootDir>/src/hooks/$1',
    '^@/styles/(.*): '<rootDir>/src/styles/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
