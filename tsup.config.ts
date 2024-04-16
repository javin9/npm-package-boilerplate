import { defineConfig } from 'tsup';

export default defineConfig({
  // 入口文件 或者可以使用 entryPoints 底层是 esbuild
  entry: ['src/index.ts'],

  // 输出默认dist
  outDir: 'dist',

  // 打包类型  支持以下几种 'cjs' | 'esm' | 'iife'
  format: ['cjs', 'esm'], // Build for commonJS and ESmodules

  // Generate declaration file (.d.ts)
  dts: true,

  // 代码分割 默认esm模式支持 如果cjs需要代码分割的话就需要配置为 true
  splitting: false,
  sourcemap: true,

  // 每次打包先删除dist
  clean: true,
});
