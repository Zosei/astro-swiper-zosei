// Copyright (c) Zosei
// MIT License

import { test } from "@playwright/test";
import { getTestName, testSwiper, type Config } from "./utils/utils";

const config: Config = {
  testName: getTestName(import.meta.url),
  autoplayDelay: 700, // Assuming 700ms autoplay delay
  // pagination: true, // Enable pagination testing
  // navigation: true, // Enable navigation testing
  // scrollbar: true, // Enable scrollbar testing
  // lazyload: true, // Enable lazy load testing
};

test.describe(`${config.testName} Tests`, () => {
  testSwiper(config);
});
