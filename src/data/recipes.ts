import { useCurrentUser } from 'vuefire'
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from 'firebase/firestore'
import { getOrCreateFirebaseApp } from '@/firebase/app'

import type { Recipe } from '@/types'

export async function fetchRecipes(): Recipe[] {
	const app = getOrCreateFirebaseApp()
	const db = getFirestore(app)

	const user = useCurrentUser()
	const userId = user.value?.uid!

	const recipes = await getDocs(collection(db, 'users', userId, 'recipes'))

	return recipes.docs.map(recipe => {
		return {
			id: recipe.id,
			...recipe.data()
		}
	})
}

export function getRecipeById(recipes: Recipe[], id: string): Recipe | null {
	const recipe = recipes.filter(entry => entry.id === id)

	return recipe.length > 0 ? recipe[0] : null
}

export function getRecipeNames(recipes: Recipe[]): string[] {
	return recipes.map(recipe => recipe.name)
}

export function getRecipeByName(recipes: Recipe[], name: string): Recipe | null {
	const recipe = recipes.filter(recipe => recipe.name === name)

	return recipe.length > 0 ? recipe[0] : null
}

export async function addRecipe(recipe: Recipe) {
	await addDoc(collection(db, 'users', userId, 'recipes'), recipe)
}

export async function updateRecipe(id: string, recipe: Recipe) {
	const recipeRef = doc(db, 'users', userId, 'recipes', id)

	await updateDoc(recipeRef, recipe)
}

export async function deleteRecipe(id: string) {
	await deleteDoc(doc(db, 'users', userId, 'recipes', id))
}
