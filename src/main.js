import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Chat from './components/Chat.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/:sessionId([0-9a-z]{16})',
            name: 'chat',
            component: Chat
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')