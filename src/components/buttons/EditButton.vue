<template>
	<RouterLink :to="`/${props.type}/${props.id}`" class="edit-button">
		<EditIcon />
	</RouterLink>
</template>

<script setup lang="ts">
	import EditIcon from '@/components/icons/EditIcon.vue'

	const props = defineProps<{
		type: string,
		id: string
	}>()
</script>

<style scoped lang="scss">
	@use '@/scss/mixins' as *;
	@use '@/scss/palette' as *;
	@use '@/scss/variables' as *;

	.edit-button {
		height: $card-button-size;
		width: $card-button-size;

		.icon {
			@include icon;
		}

		&:hover,
		&:focus {
			.icon {
				fill: $primary-dark;
			}
		}
	}
</style>