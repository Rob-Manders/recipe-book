import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/ingredients',
			name: 'ingredients',
			component: () => import('../views/IngredientsView.vue')
		},
		// {
		// 	path: '/ingredients/new',
		// 	name: 'new ingredient',
		// 	component: () => import('../views/NewIngredientView.vue')
		// },
		{
			path: '/ingredients/:id',
			name: 'edit ingredient',
			component: () => import('../views/EditIngredientView.vue')
		}
	]
})

export default router
