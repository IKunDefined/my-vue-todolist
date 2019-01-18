<template>
  <div id="header">
    <div class="center">
      <div class="left">
        <h1>My Todo List</h1>
      </div>
      <div class="right">
        <UserLogin class="left login-button button" @transferDisplay="display"/>
        <UserRegister class="right register-button button" @transferDisplay="display"/>
      </div>
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
  },
  data () {
    return {
      isDisplay: {}
    }
  },
  methods: {
    display (isDisplay) {
      this.isDisplay = isDisplay
      this.$emit('transferDisplay', this.isDisplay)
    }
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

.left {
  float: left;
}

.right {
  float: right;
}

.login-button {
  margin-right: 20px;
}
</style>
