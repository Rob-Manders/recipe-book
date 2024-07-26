<template>
	<div class="ingredient">
		<div class="ingredient__details">
			<h2 class="ingredient__name">{{ name }}</h2>
			<p class="ingredient__brand">{{ brand ? brand : 'Generic' }}</p>
		</div>

		<div class="ingredient__buttons">
			<RouterLink :to="`/ingredients/${id}`" class="ingredient__button ingredient__edit-button">
				<EditIcon />
			</RouterLink>
			<button @click="deleteIngredient(id)" class="ingredient__button ingredient__delete-button">
				<DeleteIcon />
			</button>
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
	const { deleteIngredient } = useIngredientStore()
</script>

<style scoped lang="scss">
	@use '@/scss/palette' as *;

	$button-size: 28px;

	.ingredient {
		display: flex;
		justify-content: space-between;
		background-color: $secondary-light;
		margin-bottom: 0.5rem;
		padding: 0.5rem 0.5rem;
		border-radius: 5px;

		&__name {
			font-size: 1.25rem;
		}

		&__brand {
			font-size: 0.75rem;
			opacity: 0.8;
		}

		&__buttons {
			display: flex;
			align-items: center;
		}

		&__button {
			height: $button-size;
			width: $button-size;
		}

		&__delete-button {
			cursor: pointer;
			background: none;
			border: none;
			padding: 0;
			margin-left: 0.25rem;
		}
	}

	.icon {
		width: $button-size;
		height: $button-size;

		&--edit,
		&--delete {
			fill: $text;
			opacity: 0.8;
		}

		&--edit:hover {
			fill: $primary-dark;
		}

		&--delete:hover {
			fill: $red;
		}
	}
</style>
