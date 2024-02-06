<template>
	<h1>Ingredients</h1>

	<button @click="() => addIngredient(newIngredient)">Add Ingredient</button>

	<Ingredient v-for="ingredient in ingredients" :ingredient="ingredient" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useIngredientStore } from '@/stores/ingredients';
import Ingredient from '../components/Ingredient.vue'
import { storeToRefs } from 'pinia';

const ingredientStore = useIngredientStore()

const { ingredients } = storeToRefs(ingredientStore)
const { addIngredient } = ingredientStore

const newIngredient = {
	id: 'ingredientId123',
	name: 'Onion',
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