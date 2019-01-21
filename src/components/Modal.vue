<template>
  <div class="modal-box" v-show="show">
    <div class="modal-mask"></div>
    <div class="modal-content">
      <div class="animate"></div>
      <div class="text">这是modal</div>
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