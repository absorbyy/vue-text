// 入口文件
// TODO: 引用部分
import Vue from 'vue'
// TODO: 路由模块导入
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 安装 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


// TODO: 请求导入
import VueResource from 'vue-resource'
Vue.use(VueResource)
//对于 resource 全局设置
Vue.http.options.root = 'http://www.liulongbin.top:3005';
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON='true';

// TODO:   vuex  数据
import Vuex from 'vuex'
Vue.use(Vuex)
//car:[] 之前调用localStorage
var car=JSON.parse(localStorage.getItem('car')||'[]')
var store=new Vuex.Store({
  state:{
    car:car//这个数组[id:,count:,selected:price]
  },
  mutations:{
    addcar(state,addcarinfo){
      var newadd=false
      state.car.some(
        item=>{
          if(addcarinfo.id===item.id){
            item.count+=parseInt(addcarinfo.count)
            newadd=!newadd
            return true
          }
        }
      )
      if(!newadd){
        state.car.push(addcarinfo)
      }
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updatacar(state,addcarinfo){
      state.car.some(
        item=>{
          if(addcarinfo.id===item.id){
            item.count=parseInt(addcarinfo.count)
            return true
          }
        }
      )
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    delete(state,deleteid){
      state.car.some(item=>{
        if(item.id===deleteid){
          state.car.splice(item,1)
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updataselect(state,selectinfo){
      state.car.some(item=>{
        if(item.id===selectinfo.id){
          item.selected=selectinfo.selected
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },
  },
  getters:{
    carcont(state){
      var count=0
      state.car.forEach(item=>{
        count+=item.count
      })
      return count
    },
    shopcarid(state){
      var shopid={}
      state.car.forEach(item=>{
        shopid[item.id] = item.count
      })
      return shopid
    },
    shopcarselect(state){
      var select={}
      state.car.forEach(item=>{
        // {id:selected}
        select[item.id]=item.selected
      })
      return select
    },
    shopcarmoney(state){
      var all={
        count:0,
        allmoney:0
      }
      state.car.forEach(item=>{
        if(item.selected===true){
          all.count+=item.count;
          all.allmoney+=item.count*item.price
        }
      })
      return all
    }
  }
})





//导入moment插件格式化时间
import moment from "moment"
// TODO: filter
var myDate = new Date();
//这里moment（）也是当前时间                          公有过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})



//公用component
import comment from './components/subcomponents/comment.vue'

Vue.component('comment',comment);


// MUI引用
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/icons-extra.css'
// import mui from "./lib/mui/js/mui.min.js";

//mint-ui 样式引用
// import { Header,Swipe, SwipeItem,Button} from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Header.name, Header);
// Vue.component(Button.name, Button);
//注意  懒加载 要使用全局导入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


import app from './App.vue'
import router from './router.js'

// TODO: 建立vue
var vm=new Vue({
  el:'#app',
  render:c=>c(app),
  router,
  store,
})
