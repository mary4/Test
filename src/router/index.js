import { createWebHistory, createRouter } from 'vue-router'
// import JokeComponent from '../components/JokeComponent'



const routes = [
    {
        path: "/main",
        name: "Joke",
        component: () => import('../components/JokeComponent'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;