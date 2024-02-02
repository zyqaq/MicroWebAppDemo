// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import './core/polyfill';

import { renderClient } from 'C:/Users/15738/Desktop/demo/qiankunDemo/umi-app/node_modules/@umijs/renderer-react';
import { getRoutes } from './core/route';
import { createPluginManager } from './core/plugin';
import { createHistory } from './core/history';
import { ApplyPluginsType } from 'umi';
import { genMount as qiankun_genMount, genBootstrap as qiankun_genBootstrap, genUnmount as qiankun_genUnmount, genUpdate as qiankun_genUpdate } from '@@/plugin-qiankun-slave/lifecycles';

const publicPath = "/";
const runtimePublicPath = true;

async function render() {
  const pluginManager = createPluginManager();
  const { routes, routeComponents } = await getRoutes(pluginManager);

  // allow user to extend routes
  await pluginManager.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: {
      routes,
      routeComponents,
    },
  });

  return (pluginManager.applyPlugins({
    key: 'render',
    type: ApplyPluginsType.compose,
    initialValue() {
      const contextOpts = pluginManager.applyPlugins({
        key: 'modifyContextOpts',
        type: ApplyPluginsType.modify,
        initialValue: {},
      });
      const basename = contextOpts.basename || '/umi-app';
      const context = {
        routes,
        routeComponents,
        pluginManager,
        rootElement: contextOpts.rootElement || document.getElementById('root'),
        publicPath,
        runtimePublicPath,
        history: createHistory({
          type: contextOpts.historyType || 'browser',
          basename,
          ...contextOpts.historyOpts,
        }),
        basename,
      };
      return renderClient(context);
    },
  }))();
}


render();

export const bootstrap = qiankun_genBootstrap(render);
export const mount = qiankun_genMount('root');
export const unmount = qiankun_genUnmount('root');
export const update = qiankun_genUpdate();
if (!window.__POWERED_BY_QIANKUN__) {
  bootstrap().then(mount);
}
