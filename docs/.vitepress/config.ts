import { defineConfig } from "vitepress";
import { resolve } from "path";
import { demoBlockPlugin } from "vitepress-theme-demoblock";

export default defineConfig({
  // base: '/',
  // description: '',
  // outDir: `${process.cwd()}/doc_dist`,
  // titleTemplate: 'blibs',
  appearance: false,
  // rewrites: {
  //     'guide/index.md': 'index.md',
  // },
  themeConfig: {
    siteTitle: "",

    nav: [{ text: "起步", link: "/", activeMatch: "^/$" }],
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin, {
        cssPreprocessor: "scss",
        // scriptImports: [`import * as blibs from '${blibsPath}'`, `import * as ossByAli from '${ossByAliPath}'`, `import * as store from '${storePath}'`],
        // scriptReplaces: [
        //     {
        //         searchValue: /import ({.*}) from '@saas\/blibs'/g,
        //         replaceValue: (s, s1) => `const ${s1} = blibs`,
        //     },
        //     {
        //         searchValue: /import OSS from 'ali-oss'/gi,
        //         replaceValue: () => `const {Oss} = ossByAli`,
        //     },
        //     {
        //         searchValue: /import ({.*}) from '..\/depends\/store'/gi,
        //         replaceValue: (s, s1) => `const ${s1} = store`,
        //     },
        // ],
      });
    },
  },
  vite: {
    build: {
      target: "esnext",
      // rollupOptions: {
      //     external: ['fabric'],
      // },
    },
    resolve: {
      alias: {
        "@": resolve(""),
      },
    },
  },
  lastUpdated: true,
});
