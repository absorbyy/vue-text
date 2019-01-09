<template lang="html">
  <div class="newsinfo-container ">
    <div class="newsInfo-top">
      <h1>{{newsInfo.title}}</h1>
      <p>
        <span>访问次数:{{ newsInfo.click }}</span>
        <span>日期: {{newsInfo.add_time | dateFormat}}</span>
      </p>
  <hr>
    </div>

        <div class="content" v-html="newsInfo.content"></div>
        <!-- 加入评论子组件 -->
        <comment :id="this.id"></comment>

  </div>
</template>

<script>
//也不用导入评论。vue了
export default {
  data(){
    return{
      id:this.$route.params.id,// 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
      newsInfo:{}
    }
  },
  created(){
    this.getNewsInfo()
  },
  methods:{
    getNewsInfo(){
      this.$http.get("api/getnew/" + this.id).then((result)=>{
        console.log(result.body);
        if(result.body.status===0){
          this.newsInfo=result.body.message[0]
        }
      })
    }
  },
  // components: {
  //   // 用来注册子组件的节点  私有  更改为全局在main.js 导入
  //    comment
  // }
}
</script>

<style lang="css" >
.newsinfo-container {
  padding: 0 4px;
}
.newsInfo-top h1{
  font-size: 16px;
  text-align: center;
  margin: 15px 0;
  color: red;

}
.newsInfo-top  p{
  display: flex;
  justify-content: space-between;
}
.newsInfo-top  p  span{
  color: blue
}
.newsinfo-container .content img{
  width: 100%
  /* 去掉scope 这一项设置才可以使用  */
}
</style>
