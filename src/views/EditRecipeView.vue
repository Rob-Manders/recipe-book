<template>
	<form class="recipe-form">
		<TextInput label="Name" v-model="recipe.name" />
		<TextInput label="Description" v-model="recipe.description" />
		<TextInput label="Portions" v-model="recipe.portions" />
	</form>

	<div v-for="ingredient in ingredients" class="recipe-form__ingredients">
		<p>{{ ingredient.name }}</p>
		<p>{{ ingredient.amount }}g</p>
	</div>

	<div class="recipe-form__controls">
		<p class="recipe-form__error-message">{{ errorMessage }}</p>
		<button class="recipe-form__button" @click="updateOrAddRecipe">{{ newRecipe ? 'Create' : 'Update' }}</button>
	</div>

</template>

<script setup lang="ts">
	import { computed, onBeforeMount, onMounted, ref } from 'vue'
	import { useRoute, useRouter } from 'vue-router'
	import { fetchRecipes, getRecipeById, getRecipeNames, getRecipeByName, addRecipe, updateRecipe } from '@/data/recipes'
	import { fetchIngredients } from '@/data/ingredients'
	import TextInput from '@/components/forms/TextInput.vue'

	import type { Nutrition, Recipe } from '@/types'

	const route = useRoute()
	const router = useRouter()
	const id = route.params.id as string

	const ingredients = ref<Ingredient[]>([])
	const recipes = ref<Recipe[]>([])
	const recipeNames = computed(() => getRecipeNames(recipes))

	const newRecipe = ref(true)
	const errorMessage = ref('')
	const recipe = ref<Recipe>({
		name: '',
		description: '',
		portions: null,
		ingredients: []
	})

	const recipeIngredients = ref<{
		name: string,
		amount: int,
		nutrition: Nutrition
	}>()

	onBeforeMount(() => {
		ingredients.value = fetchIngredients()
		recipes.value = fetchRecipes()
	})

	onMounted(() => {
		if (id === 'new') return

		const data = getRecipeById(recipes.value, id)

		if (data) {
			recipe.value = data
			newRecipe.value = false

			getIngredients()
		} else {
			errorMessage.value = 'Invalid recipe ID'
		}
	})

	function getIngredients() {
		recipeIngredients.value = recipe.value.ingredients.map(ingredient => {
			const ingredientData = getIngredientById(ingredients.value, ingredient.ingredientId)

			return {
				name: ingredientData.name,
				amount: ingredient.amount,
				nutrition: ingredientData.nutrition
			}
		})
	}

	async function updateOrAddRecipe() {
		if (newRecipe) {
			const recipeExists = recipeNames.value.includes(recipe.value.name)
			if (recipeExists) {
				errorMessage.value = 'Recipe already exists.'
				return
			}

			await addRecipe(recipe.value)
		} else {
			await updateRecipe(id, recipe.value)
		}

		await router.push('/')
	}
</script>

<style scoped lang="scss">
	@use '@/scss/palette' as *;

	.recipe-form {
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
