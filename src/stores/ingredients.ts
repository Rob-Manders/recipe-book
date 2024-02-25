import { defineStore } from 'pinia'
import { useFirestore, useCollection } from 'vuefire'
import { collection, addDoc, doc, deleteDoc } from 'firebase/firestore'

import type { Ingredient } from '@/types'

const db = useFirestore()

export const useIngredientStore = defineStore('ingredient', () => {
	const ingredients = useCollection(collection(db, 'ingredients'))

	async function addIngredient(ingredient: Ingredient) {
		await addDoc(collection(db, 'ingredients'), ingredient)
	}

	async function editIngredient(id: string, ingredient: Ingredient) {
		console.log('Edit ingredient...')
	}

	async function deleteIngredient(id: string) {
		await deleteDoc(doc(db, 'ingredients', id))
	}

	return { ingredients, addIngredient, editIngredient, deleteIngredient }
})
