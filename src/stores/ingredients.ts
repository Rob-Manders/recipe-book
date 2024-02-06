import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { Ingredient } from '@/types'

export const useIngredientStore = defineStore('ingredient', () => {
  const ingredients = ref<Ingredient[]>([])

	function addIngredient(ingredient: Ingredient) {
		ingredients.value = [
			...ingredients.value,
			ingredient
		]

		// Add ingredient to Firestore.
	}

  return { ingredients, addIngredient }
})
