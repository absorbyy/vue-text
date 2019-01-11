<template lang="html">
  <div class="photoInfo-container">
    <h1>{{photoinfo.title}}</h1>
    <p>
      <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>
    <hr>
    <!--图片预览  -->
    <vue-preview :slides="list" @close="handleClose"></vue-preview>
    <!--评论组件  -->
    <comment  :id="id"></comment>
  </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'
import {Toast} from "mint-ui"
export default {
  data(){
    return{
      id:this.$route.params.id,
      photoinfo:{},
      list:[]
    }
  },
  created(){
    this.getPhotoInfo()
    this.getpreview()
  },
  methods:{
    getPhotoInfo(){
      this.$http.get("api/getimageInfo/"+this.id)
      .then(result=>{
        // console.log(result.body);
        if (result.body.status === 0) {
          this.photoinfo = result.body.message[0]
        }else{
          Toast("错误")
        }
      })
    },
    getpreview(){
      // 获取缩略图
      this.$http.get('api/getthumimages/' + this.id).then(result => {
        if (result.body.status === 0) {
          // 循环每个图片数据，补全图片的宽和高
          result.body.message.forEach(item => {
            item.w = 600
            // 放大
            item.h = 600
            item.msrc = item.src
          })
          // 把完整的数据保存到 list 中
          this.list = result.body.message
          console.log(this.list)
        }
      })
    },
    handleClose () {
       console.log('close event')
     },

  },
  components:{
    comment
  }
}
</script>

<style lang="css" >
.photoInfo-container h1{
  color: #26a2ff;
  font-size: 16px;
  text-align: center;
  margin: 20px 0;
}
.photoInfo-container p{
    /* color: #26a2ff; */
  display: flex;
  justify-content: space-between;
}
  /* figure  {
  width: 100px;
  height: 100px;
  margin: 10px;
  box-shadow: 0 0 8px #999;
} */
.photoInfo-container figure {
  width: 100px;
  height: 100px;
  margin: 10px;
  box-shadow: 0 0 8px #999;
  float: left;
}
.my-gallery::after{
  display: block;
  content: " ";
  clear: both;
  height: 0;
  width: 0;
}
  img {
    width: 100%;
    height: 100%;
  }
</style>
