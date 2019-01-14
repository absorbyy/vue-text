<template lang="html">
<div class="goodsinfo_numbox_container">
  				<div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
  					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
  					<input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="changeAmount" />
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
  // updated(){
  //   console.log("a");
  //   console.log(this.Amount);
  //   //只是在中间更改是触发  但加减不触发
  // },
  methods: {
    countChanged() {
      // 每当 文本框的数据被修改的时候，立即把 最新的数据，通过事件调用，传递给父组件
      // console.log(this.$refs.changeAmount.value);
      this.$emit("getShopAmount", parseInt(this.$refs.changeAmount.value));
    }
  },
  props:["max"],
  watch:{
    max: function(newVal, oldVal) {
      // 使用 JS API 设置 numbox 的最大值
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal);
      }
  }
}
</script>

<style lang="css" scoped>
.goodsinfo_numbox_container{
  display: inline-block;
  padding-left: 10px
}
</style>
