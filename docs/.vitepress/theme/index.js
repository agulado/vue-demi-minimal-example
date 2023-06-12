
import DefaultTheme from 'vitepress/theme';
import 'vitepress/dist/client/theme-default/index';
import './var.css';
import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
import { useComponents } from './useComponents';

const enhance = async app => {
    app.provide('isDocSystem', true);
};

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        useComponents(ctx.app);

        if (!import.meta.env.SSR) {
            enhance(ctx.app);
        }
    },
};
