<template>
  <div id="register">
    <h2>
      注册界面
    </h2>
    <div class="input-area">
      <div class="layout">
        <span>用户名</span>
        <input v-model="registerData.username" type="text">
      </div>
      <div class="layout">
        <span>密码</span>
        <input v-model="registerData.password" type="password">
      </div>
      <div class="layout">
        <span>确认密码</span>
        <input v-model="registerData.repassword" type="password">
      </div>
      <div class="layout">
        <button @click="toRegister">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../assets/dbserver'

export default {
  data () {
    return {
      registerData: {
        username: '',
        password: '',
        repassword: ''
      }
    }
  },
  methods: {
    toRegister () {
      this.$http.post(api + '/api/user/register', {
        username: this.registerData.username,
        password: this.registerData.password,
        repassword: this.registerData.repassword
      })
    }
  }
}
</script>

<style scoped>
#register {
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
