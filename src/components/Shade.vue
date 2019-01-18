<template>
  <div id="shade" @click="display"></div>
</template>

<script>
export default {
  data () {
    return {
      isDisplay: {
        loginIsDisplay: 'none',
        registerIsDisplay: 'none',
        shadeIsDisplay: 'none'
      }
    }
  },
  methods: {
    display () {
      this.$emit('transferDispaly', this.isDisplay)
    }
  }
}
</script>

<style scoped>
#shade {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 10;
}
</style>
