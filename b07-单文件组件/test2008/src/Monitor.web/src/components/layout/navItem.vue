<script setup lang="ts">
import { ref, reactive } from "vue";
//接收循环的参数
const { item } = defineProps({
  item: {
    type: Object,
  },
});
</script>

<template>
  <!--无子集!item.child -->
  <!-- <el-menu-item :index="v.url" v-for="v in items" :key="v.url"> -->
  <el-menu-item :index="item.url" v-if="!item.child">
    <el-icon><component :is="item.icon"></component></el-icon>
    <span>{{ item.name }}</span>
  </el-menu-item>
  <!-- 有子集 -->
  <el-sub-menu :index="item.url" v-else>
    <template #title>
      <el-icon><component :is="item.icon"></component></el-icon>
      <span>{{ item.name }}</span>
    </template>
    <!-- 子集中还有子集,递归 -->
    <NavItem v-for="sub in item.child" :key="sub.url" :item="sub"></NavItem>
  </el-sub-menu>
</template>
