<script  setup lang="ts">
  import {ref,reactive} from 'vue'
  import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  TrendCharts,
  CameraFilled,
  GoodsFilled,
  Opportunity,

} from '@element-plus/icons-vue'
import Layout from '@/layout/index.vue'
import NavItem from './navItem.vue'

  //let title =ref('布局')
  const items = reactive([
    {name:'首页',url:'/first',icon:Location},
    {name:'订单管理',url:'/order',icon:Setting},
    {name:'系统监控',
     url:'/monitor',
     icon:Document,
     child:[
         {name:'信息详情',url:'/monitor/info',icon:TrendCharts},
         {name:'列表展示',url:'/monitor/list',icon:CameraFilled},
     ]
    },
  ])
</script>

<template>
       <!--  左侧导航 -->
      <!-- <el-aside width="200px">Aside</el-aside> -->
      <el-aside width="200px" >
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo leftlayout" router
      >
       <NavItem v-for="v in items" :key="v.url" :item="v"></NavItem>
        <!-- <el-menu-item :index="v.url" v-for="v in items" :key="v.url">
          <el-icon><component :is="v.icon"></component></el-icon>
          <span>{{v.name}}</span>
        </el-menu-item>

        <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu> -->
    
        <!-- <el-menu-item index="/first">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator 1</span>
        </el-menu-item>
        <el-menu-item index="/order">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator 2</span>
        </el-menu-item>
        <el-menu-item index="/monitor">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator 3</span>
        </el-menu-item> -->
      </el-menu>
    </el-aside>
</template>
<style lang="scss" scoped>
.leftlayout{
  background-color:steelblue;
  height: 100%;
}
  
</style>