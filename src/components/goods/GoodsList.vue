<template lang="html">
<div class="goodList-container">
<div class="item">
  <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg" alt="">
  <h1>华为（HUAWEI）荣耀6Plus 16G双4G版</h1>
  <div class="bottom">
    <p>
      <span class="color-red">￥222</span>
      <span class="old">￥1222</span>
    </p>
    <p class="second">
      <span>热卖中</span>
      <span>还剩 60 件</span>
    </p>
  </div>
</div>
<div class="item">
  <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg" alt="">
  <h1>华为（HUAWEI）荣耀6Plus 16G双4G版dfdsfdsfdsfdsfsdf</h1>
  <div class="bottom">
    <p>
      <span class="color-red">￥222</span>
      <span class="old">￥1222</span>
    </p>
    <p class="second">
      <span>热卖中</span>
      <span>还剩 60 件</span>
    </p>
  </div>
</div>
<div class="item">
  <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg" alt="">
  <h1>华为（HUAWEI）荣耀6Plus 16G双4G版</h1>
  <div class="bottom">
    <p>
      <span class="color-red">￥222</span>
      <span class="old">￥1222</span>
    </p>
    <p class="second">
      <span>热卖中</span>
      <span>还剩 60 件</span>
    </p>
  </div>
</div>

</div>
</template>

<script>
export default {
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
  font-size: 16px
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
