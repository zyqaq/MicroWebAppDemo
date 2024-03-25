/**
 * 处理路由变化
 */

import { getApps } from "."
import { importHtml } from "./import-html"
import { getNextRoute, getPrevRoute } from "./rewrite-router"

export const handleRouter = async () => {

    const apps = getApps()
    // 获取上一个应用
    const prevApp = apps.find(item => getPrevRoute().startsWith(item.activeRule))
    // 获取下一个应用
    const app = apps.find(item => getNextRoute().startsWith(item.activeRule))
    // 如果有上一个app 则先销毁
    if (prevApp) await unmount(prevApp)

    if (!app) return
    window.__POWERED_BY_QIANKUN__ = true
    window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = app.entry + '/'
    // 3.加载子应用 
    // 请求获取子应用的 html、css、js
    
    const container = document.querySelector(app.container)
    const { template,
        getExternalScripts,
        execScripts } = await importHtml(app.entry)
    container.appendChild(template)

    const appExports = await execScripts()
    app.bootstrap = appExports.bootstrap
    app.mount = appExports.mount
    app.unmount = appExports.unmount
    bootstrap(app)

    mount(app)
    // 客户端需要通过执行JavaScript来生成内容
    // 浏览器出于安全考虑 innerHTML中的script脚本不会执行

    // 手动执行文本中的js代码  eval 或者 new Function
    // 4.渲染子应用
}

const bootstrap = async (app) => {
    app.bootstrap && await app.bootstrap()
}

const mount = async (app) => {
    app.mount && await app.mount({
        container:document.querySelector(app.container)
    })
}

const unmount = async (app) => {
    app.unmount && await app.unmount({
        container:document.querySelector(app.container)
    })
}