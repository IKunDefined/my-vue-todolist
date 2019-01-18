<template>
  <div>
    <button @click="changeDisplay">登录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isDisplay: {
        loginIsDisplay: 'block',
        registerIsDisplay: 'none'
      }
    }
  },
  methods: {
    changeDisplay () {
      this.$emit('transferDisplay', this.isDisplay)
    }
  }
}
</script>
