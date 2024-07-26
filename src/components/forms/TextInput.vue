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
	.text-input {
		&__label {

		}

		&__input {

		}
	}
</style>
