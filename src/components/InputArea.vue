<template>
  <div id="input-area">
    <input
      v-model="inputData"
      type="text"
      placeholder="你有什么想要做的事情么"
      @change="setItem">
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputData: '',
      dataList: []
    }
  },
  methods: {
    setItem () {
      this.dataList.push(this.inputData)
      this.$emit('transferItem', this.dataList)
      this.inputData = ''
    }
  }
}
</script>

<style scoped>
  #input-area > input {
    display: block;
    width: 80%;
    margin: 0 auto;
    height: 40px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #888;
    padding: 5px 10px;
    font-size: 14px;
  }
</style>
