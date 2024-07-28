<template>
	<Modal :model-value="showModal" @update:model-value="() => (showModal = !showModal)" header-text="Test Modal"
		>Test Modal
	</Modal>
	<Recipe v-for="recipe in recipes" :recipe="recipe" />
	<button @click="() => (showModal = !showModal)">Toggle Modal</button>
</template>

<script setup lang="ts">
	import { storeToRefs } from 'pinia'
	import { useRecipeStore } from '@/stores/recipes'
	import Recipe from '@/components/Recipe.vue'
	import { ref } from 'vue'
	import Modal from '@/components/Modal.vue'

	const showModal = ref(false)
	const recipeStore = useRecipeStore()
	const { recipes } = storeToRefs(recipeStore)
</script>
