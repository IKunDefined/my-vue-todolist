<template>
  <div>
    <ul v-if="itemlist.length">
      <li
        v-for="(item, index) in itemlist"
        :key="index">
        {{item}}
        <button @click="setId(index)">&times;</button>
      </li>
    </ul>
    <p v-else>你这么闲，找点事情做做吧！</p>
  </div>
</template>

<script>
export default {
  methods: {
    setId (index) {
      this.$emit('transferId', index)
    }
  },
  props: ['itemlist', 'flag']
}
</script>

<style scoped>
ul {
  width: 80%;
  margin: 10px auto 0;
  padding: 10px;
}
li {
  margin-bottom: 10px;
  background: #f5f5f5;
}
button {
  float: right;
}
p {
  width: 80%;
  margin: 10px auto;
  padding: 10px;
}
</style>
