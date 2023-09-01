import { defineStore } from "pinia";
const store = defineStore("counterStore", {
  //state存放所有的状态
  state: () => ({
    userId: 0,
  }),
  //通过方法来修改状态
  actions: {
    EditUserId(val: number) {
      this.userId = val;
    },
  },
  // 状态管理
  persist: {
    // 开启
    enabled: true,
    strategies: [
      {
        // 指定key，这个名称会在浏览器本地存储中生成对应的name
        key: "site",
        //自定义存储方式，默认是sessionStorage
        storage: localStorage, 
        // 更缓存的对象，默认是所有
        paths: ["userId"],
      },
    ],
  },
});
export default store;
