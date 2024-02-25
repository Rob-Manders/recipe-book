import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useFirestore, useCollection } from 'vuefire'
import { collection, type DocumentData } from 'firebase/firestore'

import type { Ingredient } from '@/types'

const db = useFirestore()

export const useIngredientStore = defineStore('ingredient', () => {
	const ingredients = useCollection(collection(db, 'ingredients'))

	console.log(ingredients.value)

	function addIngredient(ingredient: DocumentData) {
		// ingredients.value = [
		// 	...ingredients.value,
		// 	ingredient
		// ]

		// Add ingredient to Firestore.

		console.log('Add ingredient...')
	}

	function editIngredient(id: string, ingredient: DocumentData) {
		console.log('Edit ingredient...')
	}

	function deleteIngredient(id: string) {
		console.log('Delete ingredient...')
	}

	return { ingredients, addIngredient, editIngredient, deleteIngredient }
})
