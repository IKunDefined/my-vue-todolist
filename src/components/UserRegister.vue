<template>
  <div>
    <button @click="changeDisplay">注册</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isDisplay: {
        registerIsDisplay: 'block',
        loginIsDisplay: 'none'
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
