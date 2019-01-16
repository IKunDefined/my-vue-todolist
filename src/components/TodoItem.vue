<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in itemlist"
        :key="index">
        {{item}}
        <button @click="setId(index)">&times;</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    setId (index) {
      this.$emit('transferId', index)
    }
  },
  props: ['itemlist']
}
</script>

<style scoped>
ul {
  width: 80%;
  margin: 0 auto;
  padding: 10px;
}
li {
  margin-bottom: 5px;
  background: #f5f5f5;
}
button {
  float: right;
}
</style>
