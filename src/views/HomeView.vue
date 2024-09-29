<template>
	<Modal :model-value="showModal" @update:model-value="() => (showModal = !showModal)" header-text="Test Modal">
		Test Modal
	</Modal>
	<Recipe v-for="recipe in recipes" :recipe="recipe" />
	<button @click="() => (showModal = !showModal)">Toggle Modal</button>
</template>

<script setup lang="ts">
	import { fetchRecipes } from '@/data/recipes'
	import Recipe from '@/components/Recipe.vue'
	import { onBeforeMount, ref } from 'vue'
	import Modal from '@/components/Modal.vue'

	const showModal = ref(false)
	const recipes = ref<Recipe[]>([])

	onBeforeMount(async () => {
		await fetchRecipes().then(data => recipes.value = data)
	})
</script>
