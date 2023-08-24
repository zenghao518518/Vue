<template>
    <div>
        <button>left</button>
        navbar--{{ myname }}
        <button v-show="myright">right</button>
    </div>
</template>
<script>
export default {
  props: {
    myname: {
      type: String,
      default: ''
    },
    myright: {
      type: Boolean,
      default: true
    }
  }
}
</script>
