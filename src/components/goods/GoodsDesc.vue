<template lang="html">
  <div class="GoodsDesc-container">
    <h1>{{introduce.title}}</h1>
    <hr>
    <p v-html="introduce.content"></p>
  </div>
</template>

<script>
import {Toast} from "mint-ui"
// Toast,它并不是一个全局变量,需要先引入 import { Toast } from ‘mint-ui‘
export default {
  data(){
    return{
      introduce:{},
      id:this.$route.params.id
    }
  },
  created(){
    this.getIntroduce()
  },
  methods:{
    getIntroduce(){
      this.$http.get("api/goods/getdesc/"+this.id)
      .then(result=>{
        console.log(result.body);
        if(result.body.status===0){

        this.introduce=result.body.message[0]
        }else {
          Toast('错误')
        }
      })
    }
  }
}
</script>

<style lang="css" >
.GoodsDesc-container h1{
  font-size: 15px;
  color: rgba(61, 126, 201, 0.95);
  text-align: center;
}
.GoodsDesc-container img{
  width: 100%
}
</style>
