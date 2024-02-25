import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { Recipe } from '@/types'

export const useRecipeStore = defineStore('recipe', () => {
	const recipes = ref<Recipe[]>([])

	function addRecipe(recipe: Recipe) {
		recipes.value = [...recipes.value, recipe]

		// Add recipe to Firestore.
	}

	return { recipes, addRecipe }
})
