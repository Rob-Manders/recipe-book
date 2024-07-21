<template>
	<div class="ingredient">
		<div class="ingredient__details">
			<h2 class="ingredient__name">{{ name }}</h2>
			<p class="ingredient__brand">{{ brand }}</p>
		</div>

		<div class="ingredient__buttons">
			<RouterLink :to="`/ingredients/${id}`" class="ingerdient__button ingredient__edit-button"
				><EditIcon
			/></RouterLink>
			<button @click="deleteIngredient(id)" class="ingredient__button ingredient__delete-button"><DeleteIcon /></button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { DocumentData } from 'firebase/firestore'
	import { useIngredientStore } from '@/stores/ingredients'
	import EditIcon from '@/components/icons/EditIcon.vue'
	import DeleteIcon from '@/components/icons/DeleteIcon.vue'

	const props = defineProps<{ ingredient: DocumentData }>()

	const { id, name, brand } = props.ingredient
	const { kcal, fat, saturatedFat, carbohydrate, sugars, fibre, protein, salt } = props.ingredient.nutrition

	const { deleteIngredient } = useIngredientStore()
</script>

<style scoped lang="scss">
	@use '@/scss/palette' as *;

	.ingredient {
		display: flex;
		justify-content: space-between;
		background-color: $secondary-light;

		&__delete-button {
			all: unset;
			cursor: pointer;
		}
	}

	.icon {
		width: 32px;
		height: 32px;
	}
</style>
