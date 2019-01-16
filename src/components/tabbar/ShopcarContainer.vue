<template>
  <div class="ShopcarContainer-container">
    <div class="top">
      <div class="mui-card"  v-for="(item, i) in list" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<div class="left">
            <!-- mt-switch  有chang事件 -->
            <mt-switch v-model="$store.getters.shopcarselect[item.id]"
             @change="changeselect(item.id,$store.getters.shopcarselect[item.id])" ></mt-switch>
          </div>
          <div class="middle">
            <img :src=item.thumb_path alt="">
          </div>
          <div class="right">
            <h1 style="fontSize:14px">{{item.title}}</h1>
            <div class="info">
              <span>{{item.sell_price}}元</span>
              <numbox :count="$store.getters.shopcarid[item.id]"  :id="item.id" ></numbox><br>
              <a href="#" @click.prevent="del(item.id,i)">删除</a>
            </div>
          </div>
					</div>
				</div>
			</div>
    </div>
    <div class="main">
      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">

						<div class="left">
              <p>总计:</p>
              <p>以勾选<span class="red">{{$store.getters.shopcarmoney.count}}</span>件，共计<span class="red">{{$store.getters.shopcarmoney.allmoney}}</span>件</p>
            </div>
            <div class="right">
              <mt-button type="danger">去结算</mt-button>
            </div>
					</div>
				</div>
			</div>
    </div>
  </div>
</template>

<script>
import numbox from "../subcomponents/shopcar_numbox.vue";
export default{
  data(){
    return{
      list:[],

    }
  },
  created(){
    this.getshopcar()
  },
  methods:{
    getshopcar(){
      // 1. 获取到 store 中所有的商品的Id，然后拼接出一个 用逗号分隔的 字符串
      var idArr = [];
      this.$store.state.car.forEach(item => idArr.push(item.id));

      // 如果 购物车中没有商品，则直接返回，不需要请求数据接口，否则会报错
      if (idArr.length <= 0) {
        return;
      }
      // 获取购物车商品列表
      this.$http
        .get("api/goods/getshopcarlist/" + idArr.join(","))
        .then(result => {
          console.log(result.body);
          if (result.body.status === 0) {
            this.list = result.body.message;

          }
        });
    },
    del(id,i){
      this.list.splice(i,1);
      this.$store.commit('delete',id)
     },
    changeselect(idc, val){
      var info={id:idc,selected:val}
      console.log(info);
      this.$store.commit('updataselect',info)

    }
  },
  components: {
    numbox
  }
}
</script>

<style lang="scss" scoped>
   .ShopcarContainer-container .mui-card-content-inner{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

    .ShopcarContainer-container .mui-card-content-inner img{
      width: 60px;
      height: 60px;

    }
      .ShopcarContainer-container .mui-card-content-inner .red{
        color: red;
      }
</style>
