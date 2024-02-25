import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useFirestore, useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'

import type { Ingredient } from '@/types'

const db = useFirestore()

export const useIngredientStore = defineStore('ingredient', () => {
  const ingredients = useCollection(collection(db, 'ingredients'))

	console.log(ingredients.value)

	function addIngredient(ingredient: Ingredient) {
		// ingredients.value = [
		// 	...ingredients.value,
		// 	ingredient
		// ]

		// Add ingredient to Firestore.

		console.log('Add ingredient...')
	}

  return { ingredients, addIngredient }
})
