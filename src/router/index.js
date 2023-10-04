import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    // Здесь можете настроить маршруты и другие параметры Vue Router
    routes: [
        {
            path: '/',
            component: Home
        },
    ]
})

export default router