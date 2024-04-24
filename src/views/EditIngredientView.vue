<template>
	<p>{{ id }}</p>

	<TextInput name="Input Box" v-model="inputValue" />

	<p>{{ inputValue }}</p>

	<button @click="updateIngredient">Edit Ingredient</button>
</template>

<script setup lang="ts">
	import { computed, ref } from 'vue'
	import { useRoute, useRouter } from 'vue-router'
	import { useIngredientStore } from '@/stores/ingredients'
	import TextInput from '@/components/forms/TextInput.vue'

	const route = useRoute()
	const router = useRouter()
	const id = route.params.id as string

	const { getIngredient, editIngredient } = useIngredientStore()
	const ingredient = computed(() => getIngredient(id))

	const inputValue = ref('Some Value')

	async function updateIngredient() {
		const editedIngredient = {
			...ingredient.value,
			name: 'Minced Beef'
		}

		await editIngredient(id, editedIngredient)

		router.push('/ingredients')
	}
</script>
