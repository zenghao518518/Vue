<script  setup lang="ts">
  import {ref,onMounted,watch} from 'vue'
  import { useRouter,useRoute } from 'vue-router';
  
  //路由信息
  const route=useRoute();
  //路由实例
  const router=useRouter();

  const lists =ref([]);
  
  //监听路由变化
  watch(route,(to,from)=>{
    getBreadcrumb(to.matched)
  })




  onMounted(() => {
    console.log(route.matched)
    getBreadcrumb(route.matched)
  })

  function getBreadcrumb(matched){
    lists.value=matched;
}


</script>

<template>
   <div class="breadcrumb">
    <el-breadcrumb separator="/">
   
    <el-breadcrumb-item  class="breaditem" v-for="v in lists" :key="v.path">{{v.meta.title}}</el-breadcrumb-item>
    
  </el-breadcrumb>
   </div>
</template>



<style scoped lang="scss">
// .breaditem {
//   font-size:xx-large;
//   color: rgb(236, 8, 8);
  
// }

// .el-breadcrumb  .el-breadcrumb-item .el-breadcrumb__inner 
//       {
//         color: #ccc !important;				//你想要设置的字体颜色
//     }
/* 不被选中时的颜色 */
.el-breadcrumb ::v-deep .el-breadcrumb__inner {
        color: #d9bb95 !important;
        font-weight:400 !important;
}
/* 被选中时的颜色 */
.el-breadcrumb__item:last-child ::v-deep .el-breadcrumb__inner {
        color: #fc9105 !important;
        font-weight:800 !important;
}

</style>


