import * as vueRouter from 'vue-router'
import MenuManagement from '../components/menus/MenuManagement.vue'
import RecipeDetail from '../components/recipes/RecipeDetail.vue'
import RecipeList from '../components/recipes/RecipeList.vue'
import ShoppingList from '../components/shoppings/ShoppingList.vue'
import MenuCreate from '../components/menus/MenuCreate.vue'

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
    },
    {
        path: '/menucreate',
        name: 'MenuCreate',
        component: MenuCreate
    }
]

const router = vueRouter.createRouter({
    history: vueRouter.createWebHistory(),
    routes
})

export default router