// 入口文件
// TODO: 引用部分
import Vue from 'vue'
// TODO: 路由模块导入
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// TODO: 请求导入
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005';
//导入moment插件格式化时间
import moment from "moment"
// TODO: filter
var myDate = new Date();
//这里moment（）也是当前时间  公有过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})

import router from './router.js'


//公用component
import comment from './components/subcomponents/comment.vue'
Vue.component('comment',comment);
// MUI引用
import './lib/mui/css/mui.min.css'

import './lib/mui/css/icons-extra.css'

//mint-ui 样式引用
import { Header,Swipe, SwipeItem,Button} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

// 页面导入
import app from './App.vue'


// TODO: 建立vue
var vm=new Vue({
  el:'#app',
  render:c=>c(app),
  router
})
