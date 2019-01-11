<template lang="html">
<div class="photoList-container">
  <div id="slider" class="mui-slider ">
    <!--  删除了原有的mui-fullscreen  这个属性 进行absolute   top0-->
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
            <!-- @click 在这个地方有错误 使用@tap  mui组建才可以用 -->
						<a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for='item of photoList' :key='item.id' @tap="getPhotos(item.id)">
              <!--这里只是 item.id == 0 ? 'mui-active' :  第一项刚刚刷新时有颜色变化    因为循环 每一个都成了第一项 所以要三元 -->
							{{ item.title }}
              <!--但之后的颜色变化 只是mui本身的 js方法  -->
						</a>
					</div>
				</div>
			</div>
      <div class="photos">
        <!-- 图片列表 -->
        <ul>
          <router-link  v-for="item in photos" :key='item.id'   :to="'/home/photoInfo/'+item.id" tag="li">
            <img v-lazy="item.img_url">
            <div class="content">
              <h1>{{item.title}}</h1>
              <p>{{item.zhaiyao}}</p>
            </div>
          </router-link>
        </ul>
      </div>
</div>
</template>

<script>
import { Toast } from 'mint-ui';
import mui from "../../lib/mui/js/mui.min.js";
// 这个要导入js  但其中会  有非严格语句  但bundel 。js是严格   并且和mintui 下边框clss名重复
//滚动要js   同时在mounted  设置
export default {
  data(){
    return{
      photoList:[],
      photos:[]
    }
  },
  created(){
      this.getPhotoList(),
      this.getPhotos(0)
  },
  mounted() {
    // 当 组件中的DOM结构被渲染好并放到页面中后，会执行这个 钩子函数
    // 如果要操作元素了，最好在 mounted 里面，因为，这里时候的 DOM 元素 是最新的
    // 2. 初始化滑动控件
      mui('.mui-scroll-wrapper').scroll({
	     deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
  },
  methods:{
    getPhotoList(){
      this.$http.get("api/getimgcategory")
      .then(result=>{
        console.log(result.body);
        if(result.body.status===0){
          result.body.message.unshift({ title: "全部", id: 0 });
          this.photoList=result.body.message
        }else{
          Toast('请求失败')
        }
      })
    },
    getPhotos(id){
      this.$http.get("api/getimages/"+id)
      .then(result=>{
        console.log(result.body);
        if(result.body.status===0){
          this.photos=result.body.message
        }else{
          Toast('请求失败')
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
* {
  touch-action: pan-y;
}
/* 解决黄色警告  更好的提供滑动流畅度   pan- y单指水平滑动 */
.photos{
  padding: 0;
  margin: 0 20px;

}
.photos ul{
  padding: 0;
  margin: 0

}
.photos li{
  list-style-type: none;
  text-align: center;
  background: grey;
  margin:  20px 0;
    position: relative;
}
.photos img[lazy=loading]{
  width: 40px;
  height: 300px;
  margin: auto;
}
.photos img{
width: 100%;
vertical-align: middle;
box-shadow: 0 0 16px

}
.photos .content{

  position: absolute;
  bottom: 0px;
  background-color:  rgba(164, 179, 177,0.5);
  max-height: 85px;
  text-align: left;
  display: -webkit-box;
overflow: hidden;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;

}
.photos .content h1{
  font-size: 16px;
}
.photos .content p{
  font-size: 13px;
  color: white;

}
</style>
