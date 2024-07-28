import { defineStore } from 'pinia'
import { useCollection, useCurrentUser, useFirestore } from 'vuefire'
import { addDoc, collection, deleteDoc, doc, type DocumentData, updateDoc } from 'firebase/firestore'
import { getOrCreateFirebaseApp } from '@/firebase/app'

import type { Ingredient } from '@/types'

getOrCreateFirebaseApp()

const db = useFirestore()

export const useIngredientStore = defineStore('ingredient', () => {
	const user = useCurrentUser()
	const userId = user.value?.uid!

	const ingredients = useCollection(collection(db, 'users', userId, 'ingredients'))

	function getIngredientById(id: string | string[]): DocumentData | null {
		const ingredient = ingredients.value.filter(ingredient => ingredient.id === id)

		return ingredient.length > 0 ? ingredient[0] : null
	}

	function getIngredientByName(name: string): DocumentData | null {
		const ingredient = ingredients.value.filter(ingredient => ingredient.name === name)

		return ingredient.length > 0 ? ingredient[0] : null
	}

	function getIngredientNames(): string[] {
		return ingredients.value.map(ingredient => ingredient.name)
	}

	async function addIngredient(ingredient: Ingredient) {
		await addDoc(collection(db, 'users', userId, 'ingredients'), ingredient)
	}

	async function editIngredient(id: string, ingredient: DocumentData) {
		const ingredientRef = doc(db, 'users', userId, 'ingredients', id)

		await updateDoc(ingredientRef, ingredient)
	}

	async function deleteIngredient(id: string) {
		await deleteDoc(doc(db, 'users', userId, 'ingredients', id))
	}

	return {
		ingredients,
		getIngredientById,
		getIngredientByName,
		getIngredientNames,
		addIngredient,
		editIngredient,
		deleteIngredient
	}
})
