<template>
  <div class="login">
    <div class="login__header">
      <h1>description</h1>
    </div>
    <div class="login__body">
      <div class="login__form">
        <p>desciption</p>
        <input type="text" :class="error ? 'error' : ''" v-model="form.username"  @input="validateInput('username')" placeholder="Username" />
      </div>
      <div class="login__form">
        <input type="text" :class="error ? 'error' : ''" v-model="form.phone" @input="validateInput('phone')" placeholder="Phone Number" />
      </div>
    </div>
    <button class="login_register" @click="login">Login</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: '',
        phone: ''
      },
      error: false
    }
  },
  methods: {
    validateInput(type) {
      // Валидация форм! Если type === 'username' то разрешено вводить только буквы, иначе только цифры и символы
      this.form[type] = this.form[type].replace(type === 'username' ? /[^a-zA-Z]/g : /[^0-9()+-x]/g, "");
    },
    async login() {
      const result = await this.$store.dispatch('login', this.form)
      result ? this.error = false : this.error = true
    }
  },
}
</script>
<style scoped>
.error {
  border: 1px solid red !important;
}
.login {
  margin: 207px 0;
  display: flex;
  width: 447px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #C3C3C3;
}
.login__header {
  padding: 15px 0;
  color: #5F5F5F;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #A5A5A5;
}
.login__header h1 {
  font-size: 17px;
  line-height: 21px;
  font-style: normal;
  font-weight: 400;
}
.login__body {
  display: flex;
  flex-direction: column;
  width: 89%;
  padding: 15px 0;
  gap: 28px;
}
.login__form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.login__form input {
  height: 40px;
  outline: none;
  border: none;
  padding: 0 10px;
  color: #353535;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  border-radius: 5px;
}
.login_register {
  border: none;
  color: #fff;
  width: 90%;
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: #519945;
  margin-bottom: 30px;
  margin-top: 15px;
  font-size: 17px;
  cursor: pointer;
}
</style>