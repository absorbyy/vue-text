// 入口文件
// TODO: 引用部分
import Vue from 'vue'
// MUI引用
import './lib/mui/css/mui.min.css'

//mint-ui 样式引用
import { Header } from 'mint-ui';

// 页面导入
import app from './App.vue'

Vue.component(Header.name, Header);
// TODO: 建立vue
var vm=new Vue({
  el:'#app',
  render:c=>c(app),
})
