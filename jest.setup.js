// jest.setup.js
import '@testing-library/jest-dom';
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/hook/__mock__/setupTests.js'], // path relative to project root
};
