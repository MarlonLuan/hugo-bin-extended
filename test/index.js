/* eslint-env mocha */

'use strict';

const assert = require('assert');
const binCheck = require('bin-check');
const hugoBinExtended = require('..');

describe('hugo-bin-extended', () => {
  it('should return path to binary and work', () => {
    return binCheck(hugoBinExtended, ['version']).then(works => {
      assert(works);
    });
  });
});
