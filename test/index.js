import { strict as assert } from 'node:assert';
import process from 'node:process';
import binCheck from 'bin-check';
import { test, suite } from 'uvu';
import hugoBinExtended from '../index.js';
import hugoLib from '../lib/index.js';

test('should return path to binary and work', () => {
  return binCheck(hugoBinExtended, ['version']).then(works => {
    assert.ok(works);
  });
});

test.run();

/**
 * Verify Custom/Enterprise Repository overwrite.
 */

const hugoLibCustomRepoTestSuite = suite('hugo-bin-extended overwrite download repository');

hugoLibCustomRepoTestSuite.before.each(() => {
  // Ensure that the environment is cleaned before next test run.
  delete process.env.npm_config_hugo_bin_extended_download_repo;
});

hugoLibCustomRepoTestSuite('verify test env', () => {
  assert.equal(process.env.npm_config_hugo_bin_extended_download_repo, undefined);
})

// Default Repository - Test Cases

hugoLibCustomRepoTestSuite('should return default repository url - Repository: default', () => {
  const repoSources = hugoLib(process.cwd())._src.map((v) => v.url);
  repoSources.forEach((sourceUrl) => {
    assert.ok(sourceUrl.startsWith('https://github.com/'));
  });
});

// Custom/Enterprise Repository Test Cases

hugoLibCustomRepoTestSuite('should return custom repository url - Repository: custom', () => {
  process.env.npm_config_hugo_bin_extended_download_repo = 'https://some1.example.com';
  const repoSources = hugoLib(process.cwd())._src.map((v) => v.url);
  repoSources.forEach((sourceUrl) => {
    assert.ok(sourceUrl.startsWith('https://some1.example.com/'));
  });
});

hugoLibCustomRepoTestSuite.run();
