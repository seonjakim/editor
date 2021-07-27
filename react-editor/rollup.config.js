import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import styles from 'rollup-plugin-styles'
import css from 'rollup-plugin-import-css'
import externalGlobals from 'rollup-plugin-external-globals'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default {
  input: 'index.js',
  output: {
    file: 'rollup-dist/main.js',
    format: 'es',
  },
  external: [/@babel\/runtime/, 'react', 'react-dom'],
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    peerDepsExternal(),
    nodeResolve({
      extensions: ['.js', '.jsx'],
    }),
    styles(),
    css(),
    resolve(),
    babel({
      exclude: /node_modules/,
      presets: ['@babel/preset-env', '@babel/preset-react'],
      // babelHelpers: 'runtime',
    }),
    commonjs({
      include: ['node_modules/**'],
    }),
    externalGlobals({
      react: 'window.React',
      'react-dom': 'window.ReactDOM',
    }),
    serve({
      open: true,
      verbose: true,
      contentBase: ['', 'public'],
      host: 'localhost',
      port: 3000,
    }),
    livereload({ watch: 'dist' }),
  ],
}
// export default config;
