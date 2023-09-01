<script setup lang="ts">
import { ref, onMounted } from "vue";
//import axios from 'axios'
//import axios from '../../api/'
import axios from "../../api/";

interface ItableData {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

const tableData = ref<ItableData[]>([]);

//let title =ref('首页666')
let dialogVisible = ref(false); //弹框的状态
let category = ref(""); //区分是添加或编辑
const form = ref({}); //弹框的数据对象

onMounted(async () => {
  let { data } = await axios.request<{ data: ItableData[] }>(
    "get",
    "/WeatherForecast"
  );
  tableData.value = data;
});

//axios.get('/WeatherForecast').then(res=>{
//   console.log(res)
// })

//数据设置
function setData(type, row) {
  category.value = type;
  dialogVisible.value = true;
  type=='add'?form.value={}:form.value={...row};
}
</script>

<template>
  <div>
    <el-button type="primary" @click="setData('add', null)">添加</el-button>
  </div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180" />
    <el-table-column prop="temperatureC" label="温度1" width="180" />
    <el-table-column prop="temperatureF" label="温度2" width="180" />
    <el-table-column prop="summary" label="概述" width="180" />

    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="setData('update', scope.row)"
          >Edit</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>

  <el-dialog
    v-model="dialogVisible"
    :title="category == 'add' ? '添加' : '编辑'"
  >
    <el-form :model="form" label-width="120px">
      <el-form-item label="日期">
        <el-date-picker
          v-model="form.date"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-form-item>
      <el-form-item label="温度1">
        <el-input v-model="form.temperatureC" />
      </el-form-item>
      <el-form-item label="温度2">
        <el-input v-model="form.temperatureF" />
      </el-form-item>
      <el-form-item label="概述">
        <el-input v-model="form.summary" />
      </el-form-item>
      <el-form-item label="状态">
        <el-switch v-model="form.state" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
