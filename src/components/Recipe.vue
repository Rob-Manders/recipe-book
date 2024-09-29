<template>
	<div class="recipe">
		<div class="recipe__details">
			<p class="recipe__name">{{ name }}</p>
			<p class="recipe__description">{{description }}</p>
		</div>

		<div class="recipe__buttons">
			<EditButton :id="id" type="recipes" />
			<DeleteButton :delete-function="() => deleteRecipe(id)"/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { deleteRecipe } from '@/data/recipes'
	import DeleteButton from '@/components/buttons/DeleteButton.vue'
	import EditButton from '@/components/buttons/EditButton.vue'
	import type { Recipe } from '@/types'

	const props = defineProps<{ recipe: Recipe }>()
	const { id, name, description } = props.recipe
</script>

<style scoped lang="scss">
	@use '@/scss/mixins' as *;
	@use '@/scss/palette' as *;

	.recipe {
		@include card;

		&__name {
			font-size: 1.25rem;
			margin-bottom: 0.5rem;
		}

		&__description {
			font-size: 0.75rem;
			opacity: 0.8;
			text-overflow: ellipsis;
			overflow: hidden;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 3;
			line-clamp: 3;
		}

		&__buttons {
			@include card-buttons;
		}
	}
</style>