import { defineConfig } from 'vitepress';
import { resolve } from 'path';
import { demoBlockPlugin } from 'vitepress-theme-demoblock';
// const blibsPath = resolve(__dirname, '../../../index_doc');
// const ossByAliPath = resolve(process.cwd(), 'node_modules', 'ali-oss');
// const storePath = resolve(__dirname, '../depends/store');

export default defineConfig({
    // base: '/',
    description: 'saas平台业务层[方法|组件]库。',
    // outDir: `${process.cwd()}/doc_dist`,
    // titleTemplate: 'blibs',
    appearance: false,
    // rewrites: {
    //     'guide/index.md': 'index.md',
    // },
    themeConfig: {
        siteTitle: '',
        // logo: '/17logo.png',
        // footer: {
        //     message: 'Released under the MIT License.',
        //     copyright: 'Copyright © 2011-present Shanghai Hexu Information Technology Co.,Ltd. All Rights Reserved.',
        // },
        nav: [
            { text: '起步', link: '/', activeMatch: '^/$' },
            // { text: '组件', link: '/components/', activeMatch: '^/components/' },
            // { text: '工具', link: '/utils/', activeMatch: '^/utils/' },
            // { text: '主题', link: '/themes/', activeMatch: '^/themes/' },
            // { text: 'YQ组件库', link: 'http://element.17zuoye.net' },
        ],
        // sidebar: {
        //     '/components': [
        //         {
        //             text: '引用',
        //             items: [
        //                 { text: '完整引入', link: '/components/#完整引入' },
        //                 { text: '单独组件引入', link: '/components/#单独组件的引入-v2-0-0-开始支持' },
        //             ],
        //         },
        //         {
        //             text: '组件',
        //             items: [
        //                 { text: '本地登录', link: '/components/mockLogin.html' },
        //                 { text: 'gotoTop', link: '/components/gotoTop.html' },
        //                 { text: 'header', link: '/components/header.html' },
        //                 { text: 'footer', link: '/components/footer.html' },
        //                 { text: '分组列表', link: '/components/classGroupTeamsList.html' },
        //                 { text: '分组设置', link: '/components/setClassGroupTeams.html' },
        //                 { text: '空数据提示', link: '/components/noData.html' },
        //                 { text: '选择教材', link: '/components/selectBook.html' },
        //                 { text: '多媒体文件列表&预览', link: '/components/mediaList.html' },
        //                 { text: '图片圈改', link: '/components/imageMarker.html' },
        //             ],
        //         },
        //     ],
        //     '/utils': [
        //         {
        //             text: '工具',
        //             // link: '/utils/',
        //             items: [
        //                 {
        //                     text: 'aliOss',
        //                     link: '/utils/aliOss.html',
        //                 },
        //                 {
        //                     text: 'dataURItoBlob',
        //                     link: '/utils/dataURItoBlob.html',
        //                 },
        //                 {
        //                     text: 'dateFormat',
        //                     link: '/utils/dateFormat.html',
        //                 },
        //                 {
        //                     text: 'debug',
        //                     link: '/utils/debug.html',
        //                 },
        //                 {
        //                     text: 'getUrlParam',
        //                     link: '/utils/getUrlParam.html',
        //                 },
        //                 {
        //                     text: 'judgeFileTypeByExt',
        //                     link: '/utils/judgeFileTypeByExt.html',
        //                 },
        //                 {
        //                     text: 'loadJs & loadCss',
        //                     link: '/utils/loadJs_loadCss.html',
        //                 },
        //                 {
        //                     text: 'mergeImages',
        //                     link: '/utils/mergeImages.html',
        //                 },
        //                 {
        //                     text: 'ossCropImage',
        //                     link: '/utils/ossCropImage.html',
        //                 },
        //                 {
        //                     text: 'Request',
        //                     link: '/utils/Request.html',
        //                 },
        //                 {
        //                     text: 'sso',
        //                     link: '/utils/sso.html',
        //                 },
        //                 {
        //                     text: 'scrollTo & scrollBy',
        //                     link: '/utils/scrollTo_scrollBy.html',
        //                 },
        //                 {
        //                     text: 'showLoading & closeLoading',
        //                     link: '/utils/showLoading_closeLoading.html',
        //                 },
        //                 {
        //                     text: '打点',
        //                     link: '/utils/logger.html',
        //                 },
        //                 {
        //                     text: 'URLToBase64',
        //                     link: '/utils/URLToBase64.html',
        //                 },
        //             ],
        //         },
        //     ],
        //     '/themes': [
        //         {
        //             text: '主题',
        //             items: [
        //                 {
        //                     text: '主题设定',
        //                     link: '/themes/',
        //                 },
        //                 {
        //                     text: '主题使用',
        //                     link: '/themes/used',
        //                 },
        //                 {
        //                     text: '颜色列表',
        //                     link: '/themes/colorList',
        //                 },
        //             ],
        //         },
        //     ],
        // },
        // socialLinks: [
        //     {
        //         icon: {
        //             svg: '<svg t="1662013310771" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2381" width="40" height="40"><path d="M932.317184 567.76704L885.10464 422.46144l-93.57312-287.997952c-4.8128-14.81728-25.776128-14.81728-30.590976 0L667.36128 422.459392H356.62848L263.051264 134.46144c-4.8128-14.81728-25.776128-14.81728-30.593024 0l-93.57312 287.997952-47.210496 145.309696a32.165888 32.165888 0 0 0 11.68384 35.96288l408.6272 296.890368L920.61696 603.734016c11.272192-8.192 15.990784-22.71232 11.68384-35.964928" fill="#FC6D26" p-id="2382"></path><path d="M512.002048 900.62848l155.365376-478.171136H356.634624z" fill="#E24329" p-id="2383"></path><path d="M512.004096 900.62848L356.63872 422.47168H138.901504z" fill="#FC6D26" p-id="2384"></path><path d="M138.891264 422.465536l-47.214592 145.309696a32.16384 32.16384 0 0 0 11.685888 35.96288L511.991808 900.62848z" fill="#FCA326" p-id="2385"></path><path d="M138.893312 422.459392h217.737216L263.053312 134.46144c-4.8128-14.819328-25.778176-14.819328-30.590976 0z" fill="#E24329" p-id="2386"></path><path d="M512.002048 900.62848l155.365376-478.154752H885.10464z" fill="#FC6D26" p-id="2387"></path><path d="M885.11488 422.465536l47.214592 145.309696a32.16384 32.16384 0 0 1-11.685888 35.96288L512.014336 900.62848z" fill="#FCA326" p-id="2388"></path><path d="M885.096448 422.459392H667.36128l93.577216-287.997952c4.814848-14.819328 25.778176-14.819328 30.590976 0z" fill="#E24329" p-id="2389"></path></svg>',
        //         },
        //         link: 'http://gitlab.17zuoye.net/saas-platform/shenzhou-4',
        //     },
        // ],
    },
    markdown: {
        config: md => {
            md.use(demoBlockPlugin, {
                cssPreprocessor: 'scss',
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
            target: 'esnext',
            // rollupOptions: {
            //     external: ['fabric'],
            // },
        },
        resolve: {
            alias: {
                '@': resolve(''),
            },
        },
        // server: {
        //     proxy: {
        //         // 模拟登录
        //         '/j_spring_security_check': {
        //             target: 'https://ucenter.test.17zuoye.net',
        //             changeOrigin: true,
        //             cookieDomainRewrite: '',
        //         },
        //         // 模拟登录
        //         '/j_spring_security_staging': {
        //             target: 'https://ucenter.staging.17zuoye.net',
        //             changeOrigin: true,
        //             cookieDomainRewrite: '',
        //             rewrite: _path => {
        //                 // console.log('hehe', _path.replace('_staging', ''));
        //                 return _path.replace('_staging', '_check');
        //             },
        //         },
        //         // '^/karp/saasheader/.*$': {
        //         //     target: 'https://yq.test.17zuoye.net',
        //         //     changeOrigin: true,
        //         //     rewrite: _path => {
        //         //         console.info(230, _path);
        //         //         return _path;
        //         //     },
        //         // },
        //         // '^/saas/saasheader/.*$': {
        //         //     target: 'https://www.test.17zuoye.net',
        //         //     changeOrigin: true,
        //         //     rewrite: _path => {
        //         //         console.info(240, _path);
        //         //         return _path;
        //         //     },
        //         // },
        //         '^.*?/(userMobile|teacher|saas)/.*$': {
        //             target: 'https://www.test.17zuoye.net',
        //             changeOrigin: true,
        //             rewrite: _path => {
        //                 console.info(_path); /* eslint-disable-line */
        //                 return _path;
        //             },
        //         },
        //         // 正则表达式写法
        //         '^.*?[.](vpage|api)': {
        //             target: 'https://yq.test.17zuoye.net',
        //             changeOrigin: true,
        //             rewrite: _path => {
        //                 console.info(_path); /* eslint-disable-line */
        //                 return _path;
        //             },
        //         },
        //     },
        // },
    },
    lastUpdated: true,
});
