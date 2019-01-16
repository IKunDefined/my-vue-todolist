<template>
  <div>
    <InputArea @transferItem="getItem"/>
    <TodoItem :itemlist="todoItemList" @transferId="getId"/>
  </div>
</template>

<script>
import InputArea from './InputArea'
import TodoItem from './TodoItem'

export default {
  components: {
    InputArea,
    TodoItem
  },
  data () {
    return {
      todoItemList: []
    }
  },
  methods: {
    getItem (itemList) {
      this.todoItemList = itemList
    },
    getId (itemId) {
      this.todoItemList.splice(itemId, 1)
    }
  }
}
</script>

<style scoped>

</style>
