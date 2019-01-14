<template lang="html">
<div class="goodList-container">
<!-- <router-link class="item" v-for="item in list" :key="item.id" >
  <img :src="item.img_url" alt="">
  <h1>{{item.title}}</h1>
  <div class="bottom">
    <p>
      <span class="color-red">{{item.sell_price}}</span>
      <span class="old">{{item.market_price}}</span>
    </p>
    <p class="second" >
      <span>热卖中</span>
      <span>还剩 {{item.stock_quantity}} 件</span>
    </p>
  </div>
</router-link> -->
<div class="item" v-for="item in list" :key="item.id" @click="tohtml(item.id)">
  <img :src="item.img_url" alt="">
  <h1>{{item.title}}</h1>
  <div class="bottom">
    <p>
      <span class="color-red">{{item.sell_price}}</span>
      <span class="old">{{item.market_price}}</span>
    </p>
    <p class="second" >
      <span>热卖中</span>
      <span>还剩 {{item.stock_quantity}} 件</span>
    </p>
</div>
</div>
<mt-button style="margin-top:30px"  type="danger" size="large" @click="getMore">加载更多</mt-button>
</div>
</template>

<script>
export default {
  data(){
    return{
      page:1,
      list:[],

    }
  },
  created(){
    this.getGoodsList()
  },
  methods:{
    getGoodsList(){
      this.$http.get("api/getgoods?pageindex="+this.page)
      .then(result=>{
        console.log(result.body);
        if(result.body.status===0){
          this.list=this.list.concat(result.body.message)
        }
      })
    },
    getMore(){
      this.page++;
      this.getGoodsList();
    },
    tohtml(id){
      // 1. 最简单的
      // this.$router.push("/home/goodsinfo/" + id);
      // 2. 传递对象
      // this.$router.push({ path: "/home/goodsinfo/" + id });
      // 3. 传递命名的路由
      this.$router.push({ name: "goodsinfo", params: { id } });
    },
  }
}
</script>

<style lang="css" scoped>
*{
  margin: 0;
  padding: 0
}
.goodList-container{
  display: flex;
  flex-wrap: wrap;
  /* border: 1px red solid; */
  padding: 0 7px;
  justify-content: space-between;

}
.goodList-container .item{
  width: 49%;
  /* box-sizing: border-box; */
  /* border: 1px grey solid; */
  margin-top: 7px;
  padding: 2px;
  box-shadow: 1px 1px 3px gray;
display: flex;
flex-direction: column;
justify-content: space-between;
}
.goodList-container .item img{
  width: 100%
}
.goodList-container .item h1{
  font-size: 16px;
  color: black;
}
.goodList-container .item  .bottom{
  background-color: rgba(187, 222, 205, 0.47);

}
.goodList-container .item .color-red{
  color: red;
  font-size: 16px;
  font-weight:bolder;
}

.goodList-container .item .old{
  margin-left:7px;
  text-decoration: line-through;
}
.goodList-container .item .second{
  padding: 6px 0;
  display: flex;
  justify-content: space-between;

}
</style>
