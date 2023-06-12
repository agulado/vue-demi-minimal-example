// import { store, storeKey } from '../../depends/store';
import DefaultTheme from 'vitepress/theme';
import 'vitepress/dist/client/theme-default/index';
import './var.css';
// import yqUI from '@yq/ui/lib';
// import '@yq/ui/themes/index.css';
import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
import { useComponents } from './useComponents';

// import * as blibsComp from '@shenzhou4/components';
// import blibscompClassGroupTeamsList from '@shenzhou4/components/comps/classGroupTeamsList/index_doc';
// import blibscompFooter from '@shenzhou4/components/comps/footer/index_doc';
// import blibscompGotoTop from '@shenzhou4/components/comps/gotoTop/index_doc';
// import blibscompHeader from '@shenzhou4/components/comps/header/index_doc';
// import blibscompImageMarker from '@shenzhou4/components/comps/imageMarker/index_doc';
// import blibscompMediaList from '@shenzhou4/components/comps/mediaList/index_doc';
// import blibscompMediaPreview from '@shenzhou4/components/comps/mediaPreview/index_doc';
// import blibscompMockLogin from '@shenzhou4/components/comps/mockLogin/index_doc';
// import blibscompNoData from '@shenzhou4/components/comps/noData/index_doc';
// import blibscompSelectBook from '@shenzhou4/components/comps/selectBook/index_doc';
// import blibscompSetClassGroupTeams from '@shenzhou4/components/comps/setClassGroupTeams/index_doc';

const enhance = async app => {
    // app.use(blibscompClassGroupTeamsList);
    // app.use(blibscompFooter);
    // app.use(blibscompGotoTop);
    // app.use(blibscompHeader, store);
    // app.use(blibscompImageMarker);
    // app.use(blibscompMediaList);
    // app.use(blibscompMediaPreview);
    // app.use(blibscompMockLogin);
    // app.use(blibscompNoData);
    // app.use(blibscompSelectBook);
    // app.use(blibscompSetClassGroupTeams);

    // const yqUI = await import('@yq/ui');

    // const { sso, showVersion } = await import('@shenzhou4/utils');

    // showVersion();

    // app.use(yqUI)
    //     .use(new sso(import.meta.env.DEV ? 'development' : 'test'))
    //     .use(store, storeKey);

    app.provide('isDocSystem', true);
};

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        // ctx.app.use(yqUI)
        DefaultTheme.enhanceApp(ctx);
        useComponents(ctx.app);

        if (!import.meta.env.SSR) {
            enhance(ctx.app);
        }
    },
};
