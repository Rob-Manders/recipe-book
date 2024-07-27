<template>
	<Recipe v-for="recipe in recipes" :recipe="recipe" />
</template>

<script setup lang="ts">
	import { storeToRefs } from 'pinia'
	import { useRecipeStore } from '@/stores/recipes'
	import Recipe from '@/components/Recipe.vue'

	const recipeStore = useRecipeStore()
	const { recipes } = storeToRefs(recipeStore)
</script>
