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
        loginIsDisplay: 'flex',
        registerIsDisplay: 'none',
        shadeIsDisplay: 'block'
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
