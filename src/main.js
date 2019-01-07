// 入口文件
// TODO: 引用部分
import Vue from 'vue'
// TODO: 路由模块导入
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
// MUI引用
import './lib/mui/css/mui.min.css'

import './lib/mui/css/icons-extra.css'

//mint-ui 样式引用
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);

// 页面导入
import app from './App.vue'


// TODO: 建立vue
var vm=new Vue({
  el:'#app',
  render:c=>c(app),
  router
})
