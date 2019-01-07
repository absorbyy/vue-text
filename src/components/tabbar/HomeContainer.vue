<template lang="html">

  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
    <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <h3>HomeContainer</h3>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.mint-swipe{
height: 300px
}
.mint-swipe-items-wrap div:nth-of-type(1){
background-color:rgb(104, 186, 31)
}.mint-swipe-items-wrap div:nth-of-type(2){
background-color:rgb(212, 19, 19)
}
.mint-swipe-items-wrap div:nth-of-type(3){
background-color:rgb(186, 31, 121)
}
</style>
