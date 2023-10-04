<template>
  <div class="home">
    <div class="home__todo">
      <input type="text" placeholder="Search" class="home__search" v-model="search" />
      <FilterItems @openModal="openModal" />
      <template v-for="item of filteredList">
        <Item :item="item" :key="item.id" />
      </template>
    </div>
    <CreateTodo v-if="showModal" @closeModal="openModal" />
  </div>
</template>
<script>
import Item from '../components/ui/Item.vue'
import FilterItems from '../components/ui/Filter.vue'
import CreateTodo from '../components/modals/createTodo.vue'
export default {
  components: {
    Item,
    FilterItems,
    CreateTodo
  },
  async beforeMount() {
    await this.$store.dispatch('getList')
  },
  data() {
    return {
      search: '',
      showModal: false
    }
  },
  watch: {
    search(newValue) {
      this.$store.commit('searchItems', newValue !== '' ? newValue : false)
    },
  },
  methods: {
    openModal(payload) {
      this.showModal = payload
    }
  },
  computed: {
    filteredList() {
      return this.$store.state.filteredList
    },
  },
}
</script>
<style>
.home__todo {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}
.home__search {
  padding: 0 10px;
  align-self: center;
  width: 400px;
  height: 40px;
  outline: none;
  border-radius: 5px;
  border: none;
}

</style>