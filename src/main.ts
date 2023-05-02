import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from "axios"
import Login from "./pages/Login.vue"
import Register from "./pages/Register.vue"
import PageNotFound from "./components/PageNotFound.vue"
import Cart from "./pages/Cart.vue"
import { createRouter, createWebHistory } from "vue-router"
import FruitDetailsVue from './pages/FruitDetails.vue'
import Homme from "./pages/Homme.vue"
import { createPinia } from 'pinia'
import { CartStore } from './store/CartStore/CartStore'
import DashVue from './pages/Dashboard/Dash.vue'
import FruitsDashVue from './pages/Dashboard/Fruits/FruitsDash.vue'
import AddFruits from "./pages/Dashboard/Fruits/AddFruits.vue"
import EditFruits from "./pages/Dashboard/Fruits/EditFruits.vue"
import CheckoutSuccess from './pages/Checkout/CheckoutSuccess.vue'
const route = [{
    path: "/login", component: Login, name: "login", meta: { auth: false }
}, {
    path: "/chekoutSucees", component: CheckoutSuccess, name: "chekout",
}, {
    path: "/", component: Homme,
}, {
    path: "/fruit/:id", component: FruitDetailsVue,
}, {
    path: "/cart", component: Cart, name: "cart", meta: { auth: true }
}, {
    path: "/register", component: Register, name: "register", meta: { auth: false }
}, {
    path: "/dash", component: DashVue, name: "dash", meta: { auth: true }, children: [
        { path: "fruitdash", component: FruitsDashVue, }, { path: "create", component: AddFruits, }, { path: "edit/:id", component: EditFruits, name: "editfruit" }]
}, {
    path: '/*/', component: PageNotFound,
},]
const router = createRouter({
    history: createWebHistory(),
    routes: route,

})


router.beforeEach((to, from, next) => {
    if ("auth" in to.meta && to.meta.auth && !store.isLoginIn()) {
        next('/login')
    } else if ("auth" in to.meta && !to.meta.auth && store.isLoginIn()) {
        next('/cart')
    } else if (to.path === "/dash" && !store.isAdmin()) {
        router.push("/")
    }

    else {
        next()
    }
})

const app = createApp(App)
app.use(router)

const pinia = createPinia()
app.use(pinia)
const store = CartStore()
axios.interceptors.request.use(function (config) {
    config.headers.set("Authorization", `Bearer ${store.token?.replace(/["]/g, '')}`)
    return config;
});
app.mount('#app')
