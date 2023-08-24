<template>
    <div>
        <button>left</button>
        navbar--{{ myname }}
        <button>right</button>
    </div>
</template>
<script>
export default {
  props: ['myname']
}
</script>
