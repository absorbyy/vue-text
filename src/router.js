import VueRouter from 'vue-router'
import home from './components/tabbar/HomeContainer.vue'
import member from './components/tabbar/MemberContainer.vue'
import search from './components/tabbar/SearchContainer.vue'
import shopcar from './components/tabbar/ShopcarContainer.vue'
import newsList from './components/news/NewsList.vue'
import newsInfo from './components/news/NewsInfo.vue'
import photoList from './components/photos/PhotoList.vue'
import photoInfo from './components/photos/PhotoInfo.vue'
import goodList from './components/goods/GoodsList.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:"/", redirect:"/home"},

    {path:"/home", component:home},
    {path:"/member", component:member},
    {path:"/search", component:search},
    {path:"/shopcar", component:shopcar},
    {path:'/home/newslist',component:newsList},
    {path:'/home/newsInfo/:id',component:newsInfo},
    {path:'/home/photoList',component:photoList},
    {path:'/home/photoInfo/:id',component:photoInfo},
    {path:'/home/goodList',component:goodList},
  ],
  linkActiveClass:'mui-active'


})

// 把路由对象暴露出去
export default router
