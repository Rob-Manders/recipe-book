<template>
	<Ingredient v-for="ingredient in ingredients" :ingredient="ingredient" :key="ingredient.id" />
</template>

<script setup lang="ts">
	import { fetchIngredients } from '@/data/ingredients'
	import Ingredient from '@/components/Ingredient.vue'
	import { onBeforeMount, ref } from 'vue'

	const ingredients = ref<Ingredient[]>([])

	onBeforeMount(async () => {
		await fetchIngredients().then(data => ingredients.value = data)
	})
</script>
