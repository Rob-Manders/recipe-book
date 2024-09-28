<template>
	<h1>Edit Recipe</h1>

	<p v-if="newRecipe && !errorMessage">New Recipe</p>
	<p v-else>{{ recipe.name }}</p>

	<p v-if="errorMessage">{{ errorMessage }}</p>
</template>

<script setup lang="ts">
	import { computed, onMounted, ref } from 'vue'
	import { useRoute, useRouter } from 'vue-router'
	import { useRecipeStore } from '@/stores/recipes'

	import type { Recipe } from '@/types'

	const route = useRoute()
	const router = useRouter()
	const id = route.params.id as string

	const { getRecipeById } = useRecipeStore()

	const newRecipe = ref(true)
	const errorMessage = ref('')
	const recipe = ref<Recipe>({
		name: '',
		description: '',
		ingredients: []
	})

	onMounted(() => {
		if (id === 'new') return

		const data = getRecipeById(id) as Recipe

		if (data) {
			recipe.value = data
			newRecipe.value = false
		} else {
			errorMessage.value = 'Invalid recipe ID'
		}
	})
</script>

<style scoped lang="scss">

</style>