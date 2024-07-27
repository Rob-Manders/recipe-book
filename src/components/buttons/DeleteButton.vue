<template>
	<button @click="props.deleteFunction" class="delete-button">
		<DeleteIcon />
	</button>
</template>

<script setup lang="ts">
	import DeleteIcon from '@/components/icons/DeleteIcon.vue'

	const props = defineProps<{ deleteFunction: ()=>void }>()
</script>

<style scoped lang="scss">
	@use '@/scss/mixins' as *;
	@use '@/scss/palette' as *;
	@use '@/scss/variables' as *;

	.delete-button {
		height: $card-button-size;
		width: $card-button-size;
		cursor: pointer;
		background: none;
		border: none;
		padding: 0;
		margin-left: 0.25rem;

		.icon {
			@include icon;
		}

		&:hover,
		&:focus {
			.icon {
				fill: $red;
			}
		}
	}
</style>