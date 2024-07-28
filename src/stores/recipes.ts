import { defineStore } from 'pinia'
import { useCollection, useCurrentUser, useFirestore } from 'vuefire'
import { addDoc, collection, deleteDoc, doc, type DocumentData, updateDoc } from 'firebase/firestore'
import { getOrCreateFirebaseApp } from '@/firebase/app'

import type { Recipe } from '@/types'

getOrCreateFirebaseApp()

const db = useFirestore()

export const useRecipeStore = defineStore('recipe', () => {
	const user = useCurrentUser()
	const userId = user.value?.uid!

	const recipes = useCollection(collection(db, 'users', userId, 'recipes'))

	function getRecipe(id: string | string[]): DocumentData | null {
		const recipe = recipes.value.filter(recipe => recipe.id === id)

		return recipe.length > 0 ? recipe[0] : null
	}

	async function addRecipe(recipe: Recipe) {
		await addDoc(collection(db, 'users', userId, 'recipes'), recipe)
	}

	async function editRecipe(id: string, recipe: DocumentData) {
		const recipeRef = doc(db, 'users', userId, 'recipes', id)

		await updateDoc(recipeRef, recipe)
	}

	async function deleteRecipe(id: string) {
		await deleteDoc(doc(db, 'users', userId, 'recipes', id))
	}

	return { recipes, getRecipe, addRecipe, editRecipe, deleteRecipe }
})
