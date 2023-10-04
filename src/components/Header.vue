<template>
  <header>
    <h2 class="header__title">{{ user.name }}</h2>
    <h2 class="header__website">{{ user.website }}</h2>
    <div class="header__favorites">
      <h2>{{ favoriteList || 0 }}</h2>
      <img src="./../assets/star.svg" alt="star"></div>
  </header>
</template>
<script>
export default {
  props: ['user'],
  computed: {
    favoriteList() {
      return this.$store.state.favoritesList?.length
    }
  }
}
</script>
<style>
header {
  width: 100%;
  height: 60px;
  background: #474747;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__title {
  color: #fff;
  padding-left: 15px;
}
.header__website {
  color: #fff;
}
.header__favorites {
  display: flex;
  align-items: center;
  gap: 10px;
}
.header__favorites {
  color: #fff;
}
.header__favorites img {
  width: 30px;
  padding-right: 15px;
}
</style>