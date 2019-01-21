<template>
  <div class="message-box" v-show="show">
    <div class="message-mask"></div>
    <div class="message-content">
      <div class="animate"></div>
      <div class="text">这是message</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      show: Boolean,
      text: {
        type: String,
        default: '正在加载中...'
      },
    }
  }
</script>