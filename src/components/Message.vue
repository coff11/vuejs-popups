<template>
<div>
  <transition name="fade">
    
  <div class="message-box" v-show="show">
    <div class="message-content">
      <div class="text">{{text}}</div>
    </div>
  </div>
  </transition>
</div>
</template>

<script>
  export default {
    props: {
      show: Boolean,
      text: {
        type: String,
        default: ''
      },
    }
  }
</script>

<style>
  .message-content {
    font-size: 14px;
    padding: 6px 14px;
    white-space:nowrap;
    background: rgba(0, 0, 0, .7);
    color: #fff;
    position: fixed;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    text-align: center;
    line-height: 2;
    z-index: 999;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .2s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

</style>
