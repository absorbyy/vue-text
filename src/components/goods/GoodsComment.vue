<template lang="html">
  <div class="GoodsComment-container">
    <comments :id="id"></comments>
  </div>
</template>

<script>
import comments from "../subcomponents/comment.vue"
export default {
  data(){
    return{
      id:this.$route.params.id
    }
  },
  components:{
    comments
  }
}
</script>

<style lang="css" scoped>
</style>
