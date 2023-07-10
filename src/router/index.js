import * as VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue'
import Rooms from '../views/Rooms.vue';
import CheckIn from '../views/CheckIn.vue';


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
    },
    {
        path: '/checkin/:hostID/:roomID',
        name: 'CheckIn',
        component: CheckIn
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createMemoryHistory(),
    routes
})


export default router