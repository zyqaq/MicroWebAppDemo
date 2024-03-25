import { fetchResource } from "./fetch-resource"

export const importHtml = async (url) => {
    // 获取html文本
    const html = await fetchResource(url)
    const template = document.createElement('div')
    template.innerHTML = html

    const scriptDoms = template.querySelectorAll('script')
    // 获取所有 script 标签中的代码 [代码1,代码2，....]
    function getExternalScripts() {
        return Promise.all(Array.from(scriptDoms).map(script => {
            const src = script.getAttribute('src')
            if (!src) {
                return Promise.resolve(script.innerHTML)
            } else {
                return fetchResource(src.startsWith('http') || src.startsWith('https') ? src : `${url}${src}`)
            }
        }))
    }

    // 获取并执行所有的 script 脚本代码
    async function execScripts() {
        const scripts = await getExternalScripts()
        const module = { exports: {} }
        const exports = module.exports
        scripts.forEach(code => {
            eval(code)
        })
        return module.exports
    }
    return {
        template,
        getExternalScripts,
        execScripts
    }
}