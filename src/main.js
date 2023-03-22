import { createApp } from 'vue'
import App from './App.vue'
import Home from "@/views/Home.vue"
import Counter from "@/views/CounterApp.vue"
import ErrorPage from "@/views/ErrorPage.vue"
import './assets/main.css'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/counter",
            name: "Counter",
            component: Counter
        },
        {
            path: "/:pathall(.*)*",
            name: "Not Found",
            component: ErrorPage
        }
    ]

})

createApp(App)
.use(router)
.mount('#app')
