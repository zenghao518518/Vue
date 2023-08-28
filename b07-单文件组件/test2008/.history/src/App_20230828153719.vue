<template>
  <div id="app">
    <ul>
      <li>
        <a href="/#/films">电影</a>
      </li>
      <li>
        <a href="/#/cinemas">影院</a>
      </li>
      <li>
        <a href="/#/center">我的</a>
      </li>
      <!-- 以前的路由转换监听 -->
      <!-- window.onhashchange=()=>{console.log("1111111",location.hash)} -->
    </ul>
    <h1></h1>
    <ul>
      <li>
        <!-- 多个高亮的解决方案，active-class -->
        <router-link to="/films" active-class="zenghao" tag="">电影</router-link>
      </li>
      <li>
        <router-link to="/cinemas" active-class="zenghao">影院</router-link>
      </li>
      <li>
        <router-link to="/center" active-class="zenghao">我的</router-link>
      </li>
    </ul>
    <router-view></router-view>

    <!-- 双向绑定了一个输入框的Value -->
    <input type="text" v-model="mytext" />
    {{ mytext }}
    <button @click="handleAdd()">add</button>
    <ul v-show="datalist.length">
      <li v-for="(data, index) in datalist" :key="data">
        {{ data }}
        <button @click="handleDel(index)">del</button>
      </li>
    </ul>
    <navbar myname="home" :myright="false" @event="handleEvent">
      <div>34343434</div>
    </navbar>
    <sidebar v-show="isShow"></sidebar>
    <div v-show="!datalist.length">代办事项空空如也</div>
    <div v-hello>11111111</div>
  </div>
</template>
<script>
// ES6 导出规范
// @别名===> src的绝对路径
// import navbar from '@/components/Navbar.vue'
import navbar from './components/Navbar.vue'
import sidebar from './components/Sidebar.vue'
import Vue from 'vue'
import axios from 'axios'
// 全局组件注册
Vue.component('navbar', navbar)
Vue.directive('hello', {
  inserted (el, binding) {
    console.log(el)
    el.style.border = '1px solid'
  }
})
export default {
  data () {
    return {
      mytext: 'zenghao',
      datalist: ['1111111', '22222222', '33333333'],
      isShow: true
    }
  },
  mounted () {
    // 反向代理
    axios
      .get(
        '/zenghao/ajax/movieOnInfoList?token=&optimus_uuid=74B5F0A032A711EB82DD6B9282E93C676D27D7B9731D4E608D7612C3E708C120&optimus_risk_level=71&optimus_code=10'
      )
      .then((res) => {
        console.log(res.data)
      })
  },
  components: {
    // navbar// 局部注册法，同名可省略
    sidebar
  },
  methods: {
    handleAdd () {
      console.log('handleAdd')
      this.datalist.push(this.mytext)
      this.mytext = ''
    },

    handleDel (index) {
      console.log('del', index)
      this.datalist.splice(index, 1)
    },
    handleEvent () {
      this.isShow = !this.isShow
    }
  }
}
</script>
<!-- scss经典的嵌套写法 -->
<style lang="scss" scoped>
$width: 300px;
ul {
  li {
    background: red;
  }
}
// 路由高亮的显示
// .router-link-active{
.zenghao{
  color:blue;
}
</style>

<!-- <template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style> -->
