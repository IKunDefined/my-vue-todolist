<template>
  <div id="header">
    <div class="center">
      <h1>My Todo List</h1>
      <UserLogin/>
      <UserRegister/>
    </div>
  </div>
</template>

<script>
import UserLogin from './UserLogin'
import UserRegister from './UserRegister'

export default {
  components: {
    UserLogin,
    UserRegister
  }
}
</script>

<style scoped>
#header {
  height: 50px;
  line-height: 50px;
  background: #fff;
  box-shadow: 0 0 1px 1px #ccc;
  margin-bottom: 20px;
}

.center {
  width: 1000px;
  margin: 0 auto;
  padding: 0 100px;
}

h1 {
  color: #888;
  font-size: 20px;
}
</style>
