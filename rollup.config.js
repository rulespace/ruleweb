import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: './index.js',
  output: {
    dir: 'compiled/output',
    format: 'es'
  },
  plugins: [nodeResolve()]
};