<template>
	<h1>Ingredients</h1>

	<button @click="() => addIngredient(newIngredient)">Add Ingredient</button>

	<Ingredient v-for="ingredient in ingredients" :ingredient="ingredient" :key="ingredient.id" />
</template>

<script setup lang="ts">
	import { storeToRefs } from 'pinia'
	import { useIngredientStore } from '@/stores/ingredients'
	import Ingredient from '@/components/Ingredient.vue'

	const ingredientStore = useIngredientStore()

	const { ingredients } = storeToRefs(ingredientStore)
	const { addIngredient } = ingredientStore

	const newIngredient = {
		name: 'Another Onion',
		brand: 'Generic',
		nutrition: {
			kcal: 40,
			fat: 0.1,
			saturatedFat: 0,
			carbohydrate: 9,
			sugars: 4.2,
			fibre: 1.7,
			protein: 1.1,
			salt: 0.012
		}
	}
</script>
