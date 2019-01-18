<template>
  <div>
    <Header/>
    <TodoList/>
  </div>
</template>

<script>
import Header from './components/Header'
import TodoList from './components/TodoList'

export default {
  components: {
    Header,
    TodoList
  }
}
</script>
