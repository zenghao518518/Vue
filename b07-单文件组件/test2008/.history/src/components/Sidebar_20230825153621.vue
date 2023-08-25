<template>
    <div>
        <ul>
          <li v-for="data in datalist" :key="data.filmId">
          <img :src="data.poster" />
          {{data.name}}
        </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    console.log('mounted')
    axios.get('/test.json')
      .then(res => {
        console.log(res.data.data.films)
        this.datalist = res.data.data.films
      })
    // fetch('/test.json')
    //   .then(res => {
    //     // 状态码，响应头,拿不到真正数据
    //     return res.json()
    //   }).then(res => {
    //     console.log(res.data.films)
    //     this.datalist = res.data.films
    //   }).catch(err => {
    //     console.log(err)
    //   })
  }
}
</script>
<style lang="scss">
$width:300px;
  ul{
    li{
      background:green;
    }
  }

  li {
        overflow: hidden;
        list-style: none;
        padding: 10px;
        img {
        float: left;
        width: 100px;
      }
      }

</style>
