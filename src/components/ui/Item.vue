<template>
  <div class="item">
    <input type="checkbox" class="item-checkbox" :checked="item.completed" />
    <h3 class="item__text">{{ item.id }}.</h3>
    <h3 class="item__text">user id {{ item.userId }}.</h3>
    <h3 class="item__text">{{ item.title }}</h3>
    <button class="item-favorite" @click="addToFavorite(item)">Add to favorite</button>
  </div>
</template>
<script>
export default {
  props: ['item'],
  methods: {
    addToFavorite(item) {
      this.$store.commit('addToFavorite', item)
    },
  }
}
</script>
<style>
.item h3 {
  color: #fff;
}
.item {
  display: grid;
  grid-template-columns: 2% 5% 14% 34% 20%;
  align-items: center;
  padding-top: 20px;
}
.item-favorite {
  border: none;
  color: #fff;
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: #519945;
  font-size: 17px;
  cursor: pointer;
  transition: .3s;
}
.item-checkbox {
  width: 20px;
  height: 20px;
  border: none;
  outline: none;
}

.item-favorite:hover {
  background: #fff;
  color: #000;
  transition: .3s;
}
</style>