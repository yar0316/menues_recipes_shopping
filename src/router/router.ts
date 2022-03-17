import * as vueRouter from 'vue-router'
import MenuManagement from '../components/menues/MenuManagement.vue'
import RecipeDetail from '../components/recipes/RecipeDetail.vue'
import RecipeList from '../components/recipes/RecipeList.vue'
import ShoppingList from '../components/shoppings/ShoppingList.vue'
import SignIn from '../components/SignIn.vue'

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
        name: 'ShoppingList',
        component: ShoppingList
    }
]

const router = vueRouter.createRouter({
    history: vueRouter.createWebHistory(),
    routes
})

export default router