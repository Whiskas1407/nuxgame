<template>
  <div class="filter">
    <select class="filter-select" v-model="selectFilter">
      <option v-for="item of optionFilter" :key="item.id" :value="item.key">{{ item.value }}</option>
    </select>
    <select class="filter-select" v-model="selectUserId">
      <option v-for="item of optionUserId" :key="item.id" :value="item.key">{{ item.value }}</option>
    </select>
    <button class="filter-button" @click="openModal">Create TODO</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectFilter: 'all',
      selectUserId: 'all'
    }
  },
  watch: {
    selectFilter(newValue) {
      this.$store.commit('filterItems', newValue)
    },
    selectUserId(newValue) {
      this.$store.commit('filterItems', newValue)
    }
  },
  methods: {
    openModal() {
      this.$emit('openModal', true)
    }
  },
  computed: {
    optionFilter() {
      return this.$store.state.optionFilter
    },
    optionUserId() {
      return this.$store.state.optionUserId
    }
  }
}
</script>
<style>
.filter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.filter-select {
  width: 150px;
  height: 25px;
  outline: none;
  border: none;
}
.filter-button {
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