<template>
	<label :for="id">Name</label>
	<input :name="id" type="text" v-model="model" />
</template>

<script setup lang="ts">
	import useIdendifier from '@/hooks/useIdentifier'

	const id = useIdendifier(8)
	const model = defineModel()
</script>
