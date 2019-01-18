<template>
  <div id="login">
    <h2>
      登录界面
    </h2>
    <div class="input-area">
      <div class="layout">
        <span>用户名</span>
        <input v-model="loginData.username" type="text">
      </div>
      <div class="layout">
        <span>密码</span>
        <input v-model="loginData.password" type="password">
      </div>
      <div class="layout">
        <button @click="toLogin">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../assets/dbserver'

export default {
  data () {
    return {
      loginData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    toLogin () {
      this.$http.post(api + '/api/user/login', {
        username: this.loginData.username,
        password: this.loginData.password
      })
    }
  }
}
</script>

<style scoped>
#login {
  width: 400px;
  height: 250px;
  border-radius: 5px;
  border: 1px solid #888;
  box-shadow: 0 0 1px 1px #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  background: #fff;
  flex-direction: column;
}

h2 {
  margin: 20px 0 10px;
  text-align: center;
  color: #888;
  font-size: 18px;
}

.input-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex: 1;
}

.layout {
  display: flex;
}

.layout > span {
  width: 80px;
}

input {
  width: 210px;
  border: 1px solid #888;
  height: 30px;
  padding: 10px;
}

button {
  width: 300px;
  height: 35px;
}
</style>
