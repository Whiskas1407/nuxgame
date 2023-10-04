import Vue from 'vue';
import Vuex from 'vuex';
import axios from "../plugins/axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: {},
        list: [],
        filteredList: [],
        favoritesList: [],
        optionFilter: [
            {
                id: 1,
                key: 'all',
                value: 'All'
            },
            {
                id: 2,
                key: 'completed',
                value: 'Completed'
            },
            {
                id: 3,
                key: 'uncompleted',
                value: 'Uncompleted'
            },
            {
                id: 4,
                key: 'favorites',
                value: 'Favorites'
            },
        ],
        optionUserId: [
            {
                id: 1,
                key: 'all',
                value: 'All users'
            }
        ]

    },
    mutations: {
      setUser(state, user) {
         // записываем юзера
         state.user = user
         localStorage.setItem('user', JSON.stringify(user))
      },
      getUser(state) {
         // получаем юзера с локалсторедж
         state.user = JSON.parse(localStorage.getItem('user'))
      },
      getOptionUserId(state, data) {
          // список уникальных userId
          let listUsersIds = [];
          const setId = new Set();

          // выбираем уникальные айди в отдельный массив
          for (const user of data) {
              if (!setId.has(user.userId)) {
                  listUsersIds.push(user.userId);
                  setId.add(user.userId);
              }
          }

          // записываем все userId в массив с select
         for (const item of listUsersIds) {
             state.optionUserId.push({
                 id: item + 1,
                 key: item,
                 value: item
             })
         }
      },
      getFavoriteItems(state) {
         // получаем избранные айтемы
         state.favoritesList = JSON.parse(localStorage.getItem('favoriteItems'))
      },
      setList(state, list) {
         // записываем список с всеми "todo"
         state.list = list
         state.filteredList = list
      },
      searchItems(state, text) {
          // поиск айтемов в отфильтрованом массиве
          text ? state.filteredList = state.filteredList.filter(item => item.title.includes(text)) : state.filteredList = state.list
      },
      filterItems(state, option) {
          // если выбран фильтр с чекбоксами, то приходит всегда строка!!!
          if(typeof option === 'string') {
              switch (option) {
                  case 'all' : state.filteredList = state.list
                      break;
                  case 'completed': state.filteredList = state.list.filter(item => item.completed)
                      break;
                  case 'uncompleted': state.filteredList = state.list.filter(item => !item.completed)
                      break;
                  case 'favorites': state.filteredList = state.favoritesList
                      break;
              }
              // если выбран фильтр с userId то приходит всегда number!
          } else {
              option === 'all'
                  ? state.filteredList = state.list
                  : state.filteredList = state.list.filter(item => item.userId === option)
          }
      },
      addToFavorite(state, item) {
          // добавляем в избранное айтем
          state.favoritesList.push({
              ...item,
              favorite: true
          })
          localStorage.setItem('favoriteItems', JSON.stringify(state.favoritesList))
      },
      createTodo(state, item) {
          // создаем еще одну задачку! НЕ СОХРАНЯЮ ЛОКАЛЬНО
          state.list.unshift(item)
      }
    },
    actions: {
        // получаем список пользователей!
      async login({commit}, form) {
          const users = await axios.get('/users')
          const foundObject = users.data.find(item => item.username === form.username && item.phone === form.phone);
          if (foundObject) {
              commit('setUser', foundObject)
              return true
          } else {
              return false
          }
      },
        // получаем список todo
      async getList({commit}) {
          const {data} = await axios.get('/todos')
          commit('setList', data)
          commit('getOptionUserId', data)
      }
    },
});

export default store;
