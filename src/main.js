// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VideoPlayer from 'vue-video-player' // 视频播放第三方组件
import axiosapi from './http/httpindex' // axios二次封装
import store from './store/storeindex'
Vue.config.productionTip = false
import echarts from 'echarts'

Vue.prototype.$echarts = echarts

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer) // 视频播放第三方组件
Vue.use(axiosapi) // axios二次封装

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
