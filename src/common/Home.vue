<template>
  <div>
    <Header @transferDisplay="display"/>
    <TodoList/>
    <Login :style="{display: loginIsDisplay}"/>
    <Register :style="{display: registerIsDisplay}"/>
    <Shade :style="{display: shadeIsDisplay}"/>
  </div>
</template>

<script>
import Header from '../components/Header'
import TodoList from '../components/TodoList'
import Login from '../components/Login'
import Register from '../components/Register'
import Shade from '../components/Shade'

export default {
  components: {
    Header,
    TodoList,
    Login,
    Register,
    Shade
  },
  data () {
    return {
      loginIsDisplay: 'block',
      registerIsDisplay: 'block',
      shadeIsDisplay: 'block'
    }
  },
  methods: {
    display (isDisplay) {
      this.loginIsDisplay = isDisplay.loginIsDisplay
      this.registerIsDisplay = isDisplay.registerIsDisplay
    }
  }
}
</script>
