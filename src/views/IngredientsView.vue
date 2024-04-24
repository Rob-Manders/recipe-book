<template>
	<h1>Ingredients</h1>

	<Ingredient v-for="ingredient in ingredients" :ingredient="ingredient" :key="ingredient.id" />
</template>

<script setup lang="ts">
	import { storeToRefs } from 'pinia'
	import { useIngredientStore } from '@/stores/ingredients'
	import Ingredient from '@/components/Ingredient.vue'

	const ingredientStore = useIngredientStore()
	const { getIngredientNames } = useIngredientStore()

	const { ingredients } = storeToRefs(ingredientStore)
</script>
