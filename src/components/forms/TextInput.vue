<template>
	<label :for="id">{{ props.label }}</label>
	<input :label="id" type="text" v-model="model" />
</template>

<script setup lang="ts">
	import useIdendifier from '@/hooks/useIdentifier'

	const props = defineProps<{
		label: string
	}>()

	const id = useIdendifier(8)
	const model = defineModel()
</script>
