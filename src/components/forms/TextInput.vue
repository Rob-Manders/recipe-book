<template>
	<div class="text-input">
		<label class="text-input__label" :for="id">{{ props.label }}</label>
		<input class="text-input__input" :name="id" type="text" v-model="model" />
	</div>
</template>

<script setup lang="ts">
	import useIdentifier from '@/hooks/useIdentifier'

	const props = defineProps<{
		label: string
	}>()

	const id = useIdentifier(8)
	const model = defineModel()
</script>

<style scoped lang="scss">
	@use '@/scss/palette' as *;

	.text-input {
		display: flex;
		flex-direction: column;
		margin-bottom: 0.5rem;

		&__label {
			font-size: 0.8rem;
			opacity: 0.9;
			margin-bottom: 0.25rem;
		}

		&__input {
			border-radius: 5px;
			background-color: $secondary-light;
			border: none;
			border-bottom: 3px solid $secondary-light;
			padding: 0.75rem 0.75rem 0.5rem;

			&:focus {
				outline: none;
				border-bottom: 3px solid $primary;
			}
		}
	}
</style>
