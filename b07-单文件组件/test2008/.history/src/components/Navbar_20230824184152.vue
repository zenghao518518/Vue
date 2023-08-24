<template>
    <div>
        <button @click="handleLeft">left</button>
        navbar--{{ myname }}
        <button v-show="myright">right</button>
        <slot></slot>
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
