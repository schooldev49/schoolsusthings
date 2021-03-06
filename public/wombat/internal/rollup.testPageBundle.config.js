import * as path from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const wombatDir = path.join(__dirname, '..');
const baseTestOutput = path.join(wombatDir, 'test', 'assets');

const noStrict = {
  renderChunk(code) {
    return code.replace("'use strict';", '');
  }
};

export default {
  input: path.join(__dirname, 'testPageBundle.js'),
  output: {
    name: 'testPageBundle',
    file: path.join(baseTestOutput, 'testPageBundle.js'),
    sourcemap: false,
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    noStrict
  ]
};
