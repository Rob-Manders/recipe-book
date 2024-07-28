<template>
	<dialog ref="dialog">
		<button @click="close">Close Modal</button>
		<slot />
	</dialog>
</template>

<script setup lang="ts">
	import { ref, watch } from 'vue'

	const dialog = ref<HTMLDialogElement>()
	const visible = defineModel<boolean>({
		required: true,
		default: false
	})

	function close() {
		visible.value = false
	}

	watch(visible, () => {
		if (visible.value) dialog.value?.showModal()
		else dialog.value?.close()
	})
</script>
