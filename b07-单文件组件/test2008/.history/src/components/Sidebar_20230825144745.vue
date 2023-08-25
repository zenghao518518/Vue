<template>
    <div>
        <ul>
            <li>11111111</li>
            <li>11111111</li>
            <li>11111111</li>
            <li>11111111</li>
        </ul>
    </div>
</template>
<script>
export default {

  mounted () {
    console.log('mounted')
    fetch('http://127.0.0.1:5500/a01-axios&fetch/json/maizuo.json')
      .then(res => {
        // 状态码，响应头,拿不到真正数据
        return res.json()
      }).then(res => {
        console.log(res.data.films)
        this.datalist = res.data.films
      }).catch(err => {
        console.log(err)
      })
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
</style>
