import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

const config = [
  {
    input: 'src/index.ts',
    output: [{
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      name: "weatherweblibrary"
    }, {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    external: ['axios', 'os', 'url'],
    plugins: [typescript({ tsconfig: "./tsconfig.json" })]
  }, {
    input: 'dist/esm/types/index.d.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'esm'
    },
    plugins: [dts()]
  }
];
export default config;
