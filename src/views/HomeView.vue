<template>
	<h1>Recipes</h1>

	<div v-for="recipe in recipes">
		<p>{{ recipe.name }}</p>
		<p>{{ recipe.ingredients }}</p>
	</div>
</template>

<script setup lang="ts">
	import { storeToRefs } from 'pinia'
	import { useRecipeStore } from '@/stores/recipes'

	const recipeStore = useRecipeStore()

	const { recipes } = storeToRefs(recipeStore)
</script>
