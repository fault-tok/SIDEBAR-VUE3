import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    // กำหนดเส้นทางของคุณที่นี่
    {
        path: '/home',
        component: () => import("../views/Home/home.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    next();
})

export default router;