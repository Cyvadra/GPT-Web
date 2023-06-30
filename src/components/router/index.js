import Vue from 'vue'
import Router from 'vue-router'

import Home from '../Home.vue'
import Chat from '../Chat.vue'

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/:sessionId(^[a-z0-9]{16}$)',
            component: Chat
        }
    ]
})

Vue.use(Router)
