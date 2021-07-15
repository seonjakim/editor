import { createRequire } from 'module'
const fusebox = createRequire(import.meta.url)('fuse-box')
// import { fusebox } from 'fuse-box';
const fuse = fusebox({
  entry: './index.js',
  target: 'browser',
  devServer: true,
  webIndex: true,
})

fuse.runDev()
