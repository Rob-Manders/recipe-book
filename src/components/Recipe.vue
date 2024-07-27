<template>
	<div class="recipe">
		<div class="recipe__details">
			<p class="recipe__name">{{ name }}</p>
			<p class="recipe__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		</div>

		<div class="recipe__buttons">
			<EditButton :id="id" type="recipes" />
			<DeleteButton :delete-function="() => deleteRecipe(id)"/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { DocumentData } from 'firebase/firestore'
	import { useRecipeStore } from '@/stores/recipes'
	import DeleteButton from '@/components/buttons/DeleteButton.vue'
	import EditButton from '@/components/buttons/EditButton.vue'

	const props = defineProps<{ recipe: DocumentData }>()
	const { id, name } = props.recipe

	const { deleteRecipe } = useRecipeStore()
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