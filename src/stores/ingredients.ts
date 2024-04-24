import { defineStore } from 'pinia'
import { useFirestore, useCollection } from 'vuefire'
import { collection, addDoc, doc, deleteDoc, updateDoc, type DocumentData } from 'firebase/firestore'
import { getOrCreateFirebaseApp } from '@/firebase/app'

import type { Ingredient } from '@/types'

getOrCreateFirebaseApp()

const db = useFirestore()

export const useIngredientStore = defineStore('ingredient', () => {
	const ingredients = useCollection(collection(db, 'ingredients'))

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
		await addDoc(collection(db, 'ingredients'), ingredient)
	}

	async function editIngredient(id: string, ingredient: DocumentData) {
		const ingredientRef = doc(db, 'ingredients', id)

		await updateDoc(ingredientRef, ingredient)
	}

	async function deleteIngredient(id: string) {
		await deleteDoc(doc(db, 'ingredients', id))
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
