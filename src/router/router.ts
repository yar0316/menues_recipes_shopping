import * as vueRouter from 'vue-router'
import MenuManagement from '../components/MenuManagement.vue'
import RecipeDetail from '../components/RecipeDetail.vue'
import RecipeList from '../components/RecipeList.vue'
import ShoppingList from '../components/ShoppingList.vue'

const routes = [
    {
        path: '/',
        redirect: '/menumanagement'
    },
    {
        path: '/menumanagement',
        name: 'MenuManagement',
        component: MenuManagement
    },
    {
        path: '/recipedetail',
        name: 'RecipeDetail',
        component: RecipeDetail
    },
    {
        path: '/recipelist',
        name: 'RecipeList',
        component: RecipeList
    },
    {
        path: '/shoppinglist',
        paht: 'ShoppingList',
        component: ShoppingList
    }
]

const router = vueRouter.createRouter({
    history: vueRouter.createWebHistory(),
    routes
})

export default router