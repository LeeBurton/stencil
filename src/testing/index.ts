
export { createJestPuppeteerEnvironment } from './jest/jest-environment';
export { createTestRunner } from './jest/jest-runner';
export { E2EElement, E2EPage } from './puppeteer/puppeteer-declarations';
export { jestPreprocessor } from './jest/jest-preprocessor';
export { jestSetupTestFramework } from './jest/jest-setup-test-framework';
export { newE2EPage } from './puppeteer/puppeteer-page';
export { Testing } from './testing';
export { transpile } from './test-transpile';

export * from './testing-decorators';
export { newSpecPage } from './testing-spec-page';

export { mockDocument, mockWindow } from '@stencil/core/mock-doc';
export { BUILD, resetBuildConditionals } from './testing-build';
export * from './testing-platform';
