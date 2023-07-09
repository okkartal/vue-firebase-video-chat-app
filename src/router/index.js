import * as VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue'
import Rooms from '../views/Rooms.vue';


const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/rooms',
        name: 'Rooms',
        component: Rooms
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createMemoryHistory(),
    routes
})


export default router