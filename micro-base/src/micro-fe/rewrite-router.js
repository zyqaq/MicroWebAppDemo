/**
 * 监听路由变化
 */

import { handleRouter } from "./handle-router"

const prevRoute = "" // 上一个路由
const nextRoute = window.location.pathname // 下一个路由

export const getPrevRoute = () => prevRoute // 获取上一个路由
export const getNextRoute = () => nextRoute // 获取下一个路由

export const rewriteRouter = () => {
    // hash 路由 ： window.onhashchange
    // history 路由
    // history.go、history.back、history.forward 使用popstate事件监听 ： window.onpopstate
    window.addEventListener('popstate', () => {
        handleRouter()
    })
    // pushState、replaceState 需要函数重写的方式进行劫持

    const rawPushState = window.history.pushState
    window.history.pushState = (...args) => {
        prevRoute = window.location.pathname
        rawPushState.apply(window.history, args)
        nextRoute = window.location.pathname
        handleRouter()
    }

    const rawReplaceState = window.history.replaceState
    window.history.replaceState = (...args) => {
        prevRoute = window.location.pathname
        rawReplaceState.apply(window.history, args)
        nextRoute = window.location.pathname
        handleRouter()
    }
    // 2. 匹配子应用  3.加载子应用 4.渲染子应用
}