<template>
  <div id="wrap">
    <h1>My Todo List</h1>
    <TodoList/>
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  components: {
    TodoList
  }
}
</script>

<style scoped>
#wrap {
  width: 1000px;
  margin: 0 auto;
}

h1 {
  margin: 20px 0;
  color: #888;
  font-size: 20px;
  text-align: center;
}
</style>
