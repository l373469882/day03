import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "/index"
}, {
    path: "/index",
    component: () =>
        import ('@/views/Index')
}, {
    path: "/car",
    component: () =>
        import ('@/views/Car')
}, {
    path: "/home",
    component: () =>
        import ('@/views/Home')
}, {
    path: "/detail/:id",
    component: () =>
        import ('@/views/Detail')
}, {
    path: "/search",
    component: () =>
        import ('@/views/Search')
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router