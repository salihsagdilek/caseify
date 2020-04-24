import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'


export default {
  input: 'src/caseify.js',
  output: [
    {
      file: 'dist/caseify.js',
      name: 'caseify',
      format: 'umd',
    },
    {
      file: 'dist/caseify.min.js',
      format: 'umd',
      name: 'caseify',
      plugins: [
        terser()
      ]
    }
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    commonjs(),
    resolve({ jsnext: true, preferBuiltins: true, browser: true }),
    babel({
      exclude: 'node_modules/**',
    }),
  ]
}
