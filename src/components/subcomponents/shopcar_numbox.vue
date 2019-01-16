<template lang="html">
<div class="goodsinfo_numbox_container">
  				<div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
  					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
  					<input id="test" class="mui-input-numbox" type="number" :value="count" @change='changecount'  ref="changeAmount"  readonly/>
  					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
</div>
</div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
//mui 不报undefined  并且不用刷新后才有
export default {
  // data(){
  //   return{
  //   Amount:1
  //   }
  // },

  mounted() {
    // 初始化数字选择框组件
    mui(".mui-numbox").numbox();
    console.log(this.max);
  },

  methods: {
    changecount() {
    this.$store.commit('updatacar',{
      id:this.id,
      count:this.$refs.changeAmount.value
    })
    }
  },
  props:["count", "id"],
  // watch:{
  //   max: function(newVal, oldVal) {
  //     // 使用 JS API 设置 numbox 的最大值
  //     mui(".mui-numbox")
  //       .numbox()
  //       .setOption("max", newVal);
  //     }
  // }
}
</script>

<style lang="css" scoped>
.goodsinfo_numbox_container{
  display: inline-block;
  padding-left: 10px
}
</style>
