import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, updateDoc } from 'firebase/firestore'
import { getOrCreateFirebaseApp } from '@/firebase/app'

import type { Recipe } from '@/types'
import { getUserId } from '@/firebase/user'

export async function fetchRecipes(): Recipe[] {
	const app = getOrCreateFirebaseApp()
	const db = getFirestore(app)
	const userId = getUserId()

	const recipes = await getDocs(collection(db, 'users', userId, 'recipes'))

	return recipes.docs.map(recipe => {
		return {
			id: recipe.id,
			...recipe.data()
		}
	})
}

export async function getRecipeById(id: string): Recipe | null {
	const app = getOrCreateFirebaseApp()
	const db = getFirestore(app)
	const userId = getUserId()

	const recipe = await getDoc(doc(db, 'users', userId, 'recipes', id.trim()))

	return {
		id: recipe.id,
		...recipe.data()
	}
}

export async function getRecipeNames(): string[] {
	let names: string[]
	await fetchRecipes().then(recipes => {
		names = recipes.map(recipe => recipe.name)
	})

	return names
}

export function getRecipeByName(recipes: Recipe[], name: string): Recipe | null {
	const recipe = recipes.filter(recipe => recipe.name === name)

	return recipe.length > 0 ? recipe[0] : null
}

export async function addRecipe(recipe: Recipe) {
	const app = getOrCreateFirebaseApp()
	const db = getFirestore(app)
	const userId = getUserId()

	await addDoc(collection(db, 'users', userId, 'recipes'), recipe)
}

export async function updateRecipe(id: string, recipe: Recipe) {
	const app = getOrCreateFirebaseApp()
	const db = getFirestore(app)
	const userId = getUserId()

	const recipeRef = doc(db, 'users', userId, 'recipes', id)

	await updateDoc(recipeRef, recipe)
}

export async function deleteRecipe(id: string) {
	const app = getOrCreateFirebaseApp()
	const db = getFirestore(app)
	const userId = getUserId()

	await deleteDoc(doc(db, 'users', userId, 'recipes', id))
}
