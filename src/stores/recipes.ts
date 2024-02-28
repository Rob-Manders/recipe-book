import { defineStore } from 'pinia'
import { useFirestore, useCollection } from 'vuefire'
import { collection, addDoc, doc, deleteDoc, updateDoc, type DocumentData } from 'firebase/firestore'

import type { Recipe } from '@/types'

const db = useFirestore()

export const useRecipeStore = defineStore('recipe', () => {
	const recipes = useCollection(collection(db, 'recipes'))

	function getRecipe(id: string | string[]): DocumentData | null {
		const recipe = recipes.value.filter(recipe => recipe.id === id)

		return recipe.length > 0 ? recipe[0] : null
	}

	async function addRecipe(recipe: Recipe) {
		await addDoc(collection(db, 'recipes'), recipe)
	}

	async function editRecipe(id: string, recipe: DocumentData) {
		const recipeRef = doc(db, 'recipes', id)

		await updateDoc(recipeRef, recipe)
	}

	async function deleteRecipe(id: string) {
		await deleteDoc(doc(db, 'recipes', id))
	}

	return { recipes, getRecipe, addRecipe, editRecipe, deleteRecipe }
})
