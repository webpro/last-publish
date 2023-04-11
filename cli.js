#!/usr/bin/env node

import getLastPublishDate from './index.js';

if (process.argv.length < 3) {
  console.log('Usage: last-publish <package-name>');
  process.exit(1);
}

const packageName = process.argv[2];

getLastPublishDate(packageName);
