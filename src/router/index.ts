import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import EditRecipeView from '@/views/EditRecipeView.vue'
import IngredientsView from '@/views/IngredientsView.vue'
import EditIngredientView from '@/views/EditIngredientView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/recipes/:id',
			name: 'edit recipe',
			component: EditRecipeView
		},
		{
			path: '/ingredients',
			name: 'ingredients',
			component: IngredientsView
		},
		{
			path: '/ingredients/:id',
			name: 'edit ingredient',
			component: EditIngredientView
		}
	]
})

export default router
