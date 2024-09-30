import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	updateDoc
} from 'firebase/firestore'
import { getOrCreateFirebaseApp } from '@/firebase/app'
import { getUserId } from '@/firebase/user'

import type { Ingredient } from '@/types'

export async function fetchIngredients(): Ingredient[] {
	const app = getOrCreateFirebaseApp()
	const db = getFirestore(app)
	const userId = getUserId()

	const ingredients = await getDocs(collection(db, 'users', userId, 'ingredients'))

	return ingredients.docs.map(ingredient => {
		return {
			id: ingredient.id,
			...ingredient.data()
		}
	})
}

export async function getIngredientById(id: string): Ingredient | null {
	const app = getOrCreateFirebaseApp()
	const db = getFirestore(app)
	const userId = getUserId()

	const ingredient = await getDoc(doc(db, 'users', userId, 'ingredients', id.trim()))

	return {
		id: ingredient.id,
		...ingredient.data()
	}
}

export async function getIngredientNames(ingredients: Ingredient[]): string[] {
	let names: string[]
	await fetchIngredients().then(ingredients => {
		names = ingredients.map(ingredient => ingredient.name)
	})

	return names
}

export function getIngredientByName(ingredients: Ingredient[], name: string): Ingredient | null {
	const ingredient = ingredients.filter(ingredient => ingredient.name === name)

	return ingredient.length > 0 ? recipe[0] : null
}

export async function addIngredient(ingredient: Ingredient) {
	const app = getOrCreateFirebaseApp()
	const db = getFirestore(app)
	const userId = getUserId()

	await addDoc(collection(db, 'users', userId, 'ingredients'), ingredient)
}

export async function updateIngredient(id: string, ingredient: Ingredient) {
	const app = getOrCreateFirebaseApp()
	const db = getFirestore(app)
	const userId = getUserId()

	const ingredientRef = doc(db, 'users', userId, 'ingredients', id)

	await updateDoc(ingredientRef, ingredient)
}

export async function deleteIngredient(id: string) {
	const app = getOrCreateFirebaseApp()
	const db = getFirestore(app)
	const userId = getUserId()

	await deleteDoc(doc(db, 'users', userId, 'ingredients', id))
}
