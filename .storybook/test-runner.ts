import { TestRunnerConfig } from '@storybook/test-runner';
/// <reference types="vitest/globals" />

const config: TestRunnerConfig = {
  postRender: async (page, context) => {
    const wrapper = await page.$('html');
    const elementHandler = await page.$('#storybook-root');
    const innerHTML = await elementHandler.innerHTML();
    const wrapperHTML = await wrapper.innerHTML();

    // @ts-ignore
    expect({ wrapperHTML, innerHTML }).toMatchSnapshot();
  },
};

module.exports = config;
