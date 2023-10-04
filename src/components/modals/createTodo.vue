<template>
  <div class="modal">
    <div class="modal__body">
      <img src="../../assets/close.svg" alt="close" class="modal__close" @click="closeModal" />
      <input type="text" class="modal__input" placeholder="user id" v-model="form.userId" />
      <input type="text" class="modal__input" placeholder="title" v-model="form.title" />
      <button class="modal__button" @click="createTodo">Create todo</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        userId: '',
        title: ''
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal', false)
    },
    createTodo() {
      this.form.userId && this.form.title ? this.$store.commit('createTodo',  {
        userId: this.form.userId,
        id: this.list.length + 1,
        title: this.form.title,
        completed: false
      },) : false
      this.closeModal()
    }
  },
  computed: {
    list() {
      return this.$store.state.list
    }
  }
}
</script>
<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal__close {
  width: 30px;
  align-self: flex-end;
  cursor: pointer;
}
.modal__body {
  width: 300px;
  height: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.modal__input {
  outline: none;
  width: 100%;
  height: 30px;
  padding: 0 10px;
}
.modal__button {
  border: none;
  color: #fff;
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: #519945;
  font-size: 12px;
  cursor: pointer;
  transition: .3s;
}
</style>