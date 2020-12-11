import { createApp } from 'vue'
import App from './App.vue'

/**
 * Vue3新特性：
 * Composition API：
 *  ref reactive
 *  computed watch
 *  新的生命周期函数
 *  自定义函数和 - Hooks函数
 * 
 * 其他新特性：
 *  Teleport - 瞬移组件的位置
 *  Suspense - 异步加载组件的新福音
 *  全局API的修改和优化
 *  更多的试验性特性
 * 
 * 
 * Vue2入口文件的写法：
 * Vue.config.ignoredElements = [/^app-/]
 * Vue.use(...) // 插件
 * Vue.mixin(...)
 * Vue.component(...)
 * Vue.directive(...)
 * 
 * Vue.prototype.customProperty = () => {}
 * new Vue({
 *  render: h => h(App)
 * }).$mount('#app)
 * 
 * 
 * Vue3新的写法
 * const app = createApp(App);
 * app.config.isCustomElement = tag => tag.startsWith('app-')
 * app.use(...)
 * app.mixin(...)
 * app.component(...)
 * app.directive(...)
 * 
 * app.config.gloalProperties.customProperty = () => {}
 * app.mount('#app')
 */
createApp(App).mount('#app')
