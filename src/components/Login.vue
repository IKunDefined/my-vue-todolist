<template>
  <div id="login">
    <h2>
      登录界面
    </h2>
    <div class="input-area">
      <div class="layout">
        <span>用户名&nbsp;：</span>
        <input type="text">
      </div>
      <div class="layout">
        <span>密码&nbsp;&nbsp;&nbsp;&nbsp;：</span>
        <input type="password">
      </div>
      <div class="layout">
        <button>登录</button>
      </div>
    </div>
  </div>
</template>

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
  display: flex;
  flex-direction: column;
}

h2 {
  text-align: center;
}

.input-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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
