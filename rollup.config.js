import typescript from '@rollup/plugin-typescript';
import { uglify } from 'rollup-plugin-uglify';
import packageJson from './package.json';
import changeCase from 'change-case';

const isProd = process.env.BUILD === 'prod';
const name = changeCase.camelCase(packageJson.name);

// Gets injected at the top of output file
const banner = `
// @name ${name} 
// @version ${packageJson.version}
// @date ${new Date().toDateString()}
`;

const plugins = [
  typescript({
    target: 'es5',
  })
];

if(isProd) {
  plugins.push(
    uglify({ 
      output: {
          comments: /@name|@version|@date/i
      }
   })
  );
}

export default {
    input: 'src/index.ts',
    output: {
        banner,
        name,
        file: isProd ? 'dist/index.min.js' : 'dist/index.js',
        format: 'umd',
        globals: {
            'ramda': 'R',
        }
    },
    external: [
      ...Object.keys(packageJson.dependencies || {}),
      ...Object.keys(packageJson.peerDependencies || {}),
    ],
    plugins,
};