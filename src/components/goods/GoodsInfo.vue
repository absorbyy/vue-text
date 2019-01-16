<template lang="html">
  <div class="goodsInfo-container">
    <!-- 小球 -->
    <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter">
    >
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    <!-- 轮播图 -->
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					  <swiper :lunbotuList="lunbotuList" :isfull="false"></swiper>
					</div>
				</div>
		</div>
    <!--中间  -->
    <div class="mui-card">
				<div class="mui-card-header">{{goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div>
              <del >市场价:{{goodsinfo.market_price}}</del>
              <p style="display:inline-block;">销售价:<span style="color:red;font-size:12px">{{goodsinfo.sell_price}}</span></p>
            </div>
            <p>购买数量:<numbox @getShopAmount="getShopAmount" :max="goodsinfo.stock_quantity"></numbox></p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addCar">加入购物车</mt-button>
					</div>
				</div>
			</div>
    <!-- 底部 -->
    <div class="mui-card">
				<div class="mui-card-header">item.title</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
              <p>商品货号:{{goodsinfo.goods_no}}</p>
              <p>库存数量:{{goodsinfo.stock_quantity}}</p>
              <p>上架时间:{{goodsinfo.add_time| dateFormat}}</p>
              <mt-button type="primary" size="large" plain @click="tobuy(id)">立即购买</mt-button>
              <mt-button type="danger" size="large" plain class="button" @click="comment(id)">商品评论</mt-button>
					</div>
				</div>

			</div>
  </div>
</template>

<script>
import swiper from "../subcomponents/swiper.vue";
import numbox from "../subcomponents/goodsinfo_numbox.vue";
export default {
  data(){
    return{
      id:this.$route.params.id,
      lunbotuList:[],
      goodsinfo:{},
      ballFlag:false,
      shopAmount:1,
    }
  },
  created(){
    this.getGoodsInfo()
    this.getGoodsInfoMore()
  },
  methods:{
    getGoodsInfo(){
      this.$http.get("api/getthumimages/"+this.id)
      .then(result=>{
        // console.log(result.body);
        if(result.body.status===0){
          result.body.message.forEach(item=>{
            item.img=item.src
          })
          this.lunbotuList=result.body.message
        }else{
          Toast("错误")
        }
      })
    },
    getGoodsInfoMore() {
      // 获取商品的信息
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {


        if (result.body.status === 0) {

          this.goodsinfo = result.body.message[0];
        }
      });
    },
//     // 字符串
// router.push('home')
//
// // 对象
// router.push({ path: 'home' })
//
// // 命名的路由
// router.push({ name: 'user', params: { userId: '123' }})
//
// // 带查询参数，变成 /register?plan=private
// router.push({ path: 'register', query: { plan: 'private'
    tobuy(id){
      this.$router.push({name:"buy",params:{id}})
    },
    comment(id){
      this.$router.push({name:"comment",params:{id}})
    },
    addCar(){
      this.ballFlag=!this.ballFlag
      var addcarinfo={
        id:this.id,
        count:this.shopAmount,
        selected:true,
        price:this.goodsinfo.sell_price
      }
      this.$store.commit('addcar',addcarinfo)
    },
    beforeEnter(el){  el.style.transform="translate(0,0)"},
    enter(el,done){
      el.offsetWidth//zUI开始写

      const ballposition=this.$refs.ball.getBoundingClientRect();//这是refs
      const carposition=document
        .getElementById("badge")
        .getBoundingClientRect();
        console.log(carposition.top);
      const positionx=carposition.left-ballposition.left;
      const positiony=carposition.top-ballposition.top;
      console.log(positionx);
      console.log(positiony);

      el.style.transform=`translate(${positionx}px,${positiony}px)`
      // el.style.transform="translate(90,300)"
      el.style.transition = "all 0.7s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
    getShopAmount(amount){
      this.shopAmount=amount;

      console.log("父组件拿到的数量值为： " + this.shopAmount);
    },
  },
  components:{
    swiper,
    numbox
  }
}
</script>

<style lang="css" scoped>
.goodsInfo-container .ball{
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: 390px;
  left: 150px;
  z-index: 99;
}
.goodsInfo-container{
  background-color:grey;
  overflow: hidden;


  /*  解决margin父塌陷*/
}
.goodsInfo-container .button{
  margin-top: 10px;
}
</style>
