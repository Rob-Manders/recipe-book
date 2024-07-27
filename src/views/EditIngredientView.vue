<template>

	<form class="ingredient-form">
		<TextInput label="Name" v-model="ingredient.name" />
		<TextInput label="kCal" v-model="ingredient.nutrition.kcal" />
		<TextInput label="Fat" v-model="ingredient.nutrition.fat" />
		<TextInput label="Saturated Fat" v-model="ingredient.nutrition.saturatedFat" />
		<TextInput label="Carbohydrate" v-model="ingredient.nutrition.carbohydrate" />
		<TextInput label="Sugars" v-model="ingredient.nutrition.sugars" />
		<TextInput label="Fibre" v-model="ingredient.nutrition.fibre" />
		<TextInput label="Protein" v-model="ingredient.nutrition.protein" />
		<TextInput label="Salt" v-model="ingredient.nutrition.salt" />
	</form>

	<div class="ingredient-form__controls">
		<p class="ingredient-form__error-message">{{ errorMessage }}</p>
		<button class="ingredient-form__button" @click="updateOrAddIngredient">{{ newIngredient ? 'Create' : 'Update' }}</button>
	</div>
</template>

<script setup lang="ts">
	import { computed, onMounted, ref } from 'vue'
	import { useRoute, useRouter } from 'vue-router'
	import { useIngredientStore } from '@/stores/ingredients'
	import TextInput from '@/components/forms/TextInput.vue'
	import type { Ingredient } from '@/types'

	const route = useRoute()
	const router = useRouter()
	const id = route.params.id as string

	const { getIngredientById, getIngredientNames, addIngredient, editIngredient } = useIngredientStore()

	const ingredientNames = computed(() => getIngredientNames())

	const newIngredient = ref(true)
	const errorMessage = ref('')
	const ingredient = ref<Ingredient>({
		name: '',
		nutrition: {
			kcal: null,
			fat: null,
			saturatedFat: null,
			carbohydrate: null,
			sugars: null,
			fibre: null,
			protein: null,
			salt: null
		}
	})

	onMounted(() => {
		if (id === 'new') return

		const data = getIngredientById(id) as Ingredient

		if (data) {
			ingredient.value = data
			newIngredient.value = false
		}
	})

	async function updateOrAddIngredient() {
		if (newIngredient) {
			const ingredientExists = ingredientNames.value.includes(ingredient.value.name)

			if (ingredientExists) {
				errorMessage.value = 'Ingredient already exists.'
				return
			}

			await addIngredient(ingredient.value)
			await router.push('/ingredients')
		} else {
			await editIngredient(id, ingredient.value)
			await router.push('/ingredients')
		}
	}
</script>

<style scoped lang="scss">
	@use '@/scss/palette' as *;

	.ingredient-form {
		display: flex;
		flex-direction: column;

		&__controls {
			display: flex;
			justify-content: space-between;
			margin-top: 0.25rem;
		}

		&__error-message {
			color: $red;
			font-size: 0.8rem;
		}

		&__button {
			cursor: pointer;
			display: block;
			background-color: $primary;
			color: $background;
			border: none;
			border-radius: 5px;
			outline: none;
			padding: 0.5rem 0.75rem;
			font-size: 1.25rem;
			transition: background 150ms ease-in-out;

			&:hover,
			&:focus {
				background: $primary-dark;
			}
		}
	}
</style>
