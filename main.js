import Vue from 'vue'
import App from './App'
import config from './common/config.js'
import lib from './common/lib.js'

Vue.config.productionTip = false

// 挂在全局的方法
Vue.prototype.config = config
Vue.prototype.lib = lib

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
