<template>
	<div class="ingredient">
		<div class="ingredient__details">
			<h2 class="ingredient__name">{{ name }}</h2>
			<p class="ingredient__brand">{{ brand ? brand : 'Generic' }}</p>
		</div>

		<div class="ingredient__buttons">
			<EditButton :id="id" type="ingredients" />
			<DeleteButton :delete-function="() => deleteIngredient(id)" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { deleteIngredient } from '@/data/ingredients'
	import DeleteButton from '@/components/buttons/DeleteButton.vue'
	import EditButton from '@/components/buttons/EditButton.vue'

	const props = defineProps<{ ingredient: Ingredient }>()

	const { id, name, brand } = props.ingredient
</script>

<style scoped lang="scss">
	@use '@/scss/mixins' as *;
	@use '@/scss/palette' as *;

	.ingredient {
		@include card;

		&__name {
			font-size: 1.25rem;
		}

		&__brand {
			font-size: 0.75rem;
			opacity: 0.8;
		}

		&__buttons {
			@include card-buttons;
		}
	}
</style>
