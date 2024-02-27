<template>
	<p>{{ id }}</p>

	<div v-if="ingredient">{{ ingredient }}</div>
	<div v-else>Ingredient does not exist.</div>

	<button @click="updateIngredient">Edit Ingredient</button>
</template>

<script setup lang="ts">
	import { computed } from 'vue'
	import { useRoute } from 'vue-router'
	import { useIngredientStore } from '@/stores/ingredients'

	const route = useRoute()
	const id = route.params.id as string

	const { getIngredient, editIngredient } = useIngredientStore()
	const ingredient = computed(() => getIngredient(id))

	async function updateIngredient() {
		const editedIngredient = {
			...ingredient.value,
			name: 'Minced Beef'
		}

		await editIngredient(id, editedIngredient)
	}
</script>
