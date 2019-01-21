<template>
  <div id="app">
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {

  },
  created() {
    this.$loading.show()
    
      this.$modal.show()
      this.$message.show()
    setTimeout(() => {
      this.$loading.hide()
    }, 3000);
    setTimeout(() => {
      this.$modal.hide()
    }, 5000);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
