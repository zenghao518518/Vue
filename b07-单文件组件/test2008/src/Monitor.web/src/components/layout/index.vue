<script  setup lang="ts">
  import {ref} from 'vue'
  import NavMenu from './navMenu.vue'
  import Breadcrumb from './breadcrumb.vue'
  //let title =ref('布局')
  
  
</script>

<template>
    <div class="common-layout">
    <el-container>

      <NavMenu></NavMenu>
      <el-container>
        <el-header class="toplayout">
          <!-- 系统监控管理软件 -->
        <!-- 面包屑 -->
           <Breadcrumb></Breadcrumb>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.toplayout{
  padding-top: 10px;
  background-color:steelblue;
  font-size:xx-large;
  text-align:center;
}
  
</style>

