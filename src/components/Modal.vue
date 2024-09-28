<template>
	<dialog class="dialog" ref="dialog" @click="event => clickBackdrop(event)">
		<div class="dialog__header">
			<h3 class="dialog__header-text">{{ props.headerText }}</h3>
			<button class="dialog__close-button" @click="close">
				<CloseIcon />
			</button>
		</div>
		<slot />
	</dialog>
</template>

<script setup lang="ts">
	import { onMounted, onUnmounted, ref, watch } from 'vue'
	import CloseIcon from '@/components/icons/CloseIcon.vue'

	const props = defineProps<{ headerText: string }>()
	const dialog = ref<HTMLDialogElement>()
	const visible = defineModel<boolean>({
		required: true,
		default: false
	})

	onMounted(() => {
		document.body.addEventListener('keyup', closeOnEscape)
	})

	onUnmounted(() => {
		document.body.removeEventListener('keyup', closeOnEscape)
	})

	function closeOnEscape(event) {
		event.preventDefault()

		if (event.key === 'Escape') {
			close()
		}
	}

	function clickBackdrop(event) {
		const rect = event.target.getBoundingClientRect()

		if (
			rect.left > event.clientX ||
			rect.right < event.clientX ||
			rect.top > event.clientY ||
			rect.bottom < event.clientY
		) {
			close()
		}
	}

	function close() {
		visible.value = false
	}

	watch(visible, () => {
		if (visible.value) dialog.value?.showModal()
		else dialog.value?.close()
	})
</script>

<style scoped lang="scss">
	@use '@/scss/mixins' as *;
	@use '@/scss/palette' as *;

	.dialog {
		$margin: 0.75rem;

		max-width: calc(100vw - (1rem + ($margin / 2)));
		width: 100%;
		padding: 0.5rem;
		margin: $margin;
		border: none;
		border-radius: 5px;

		&::backdrop {
			background: linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5));
		}

		&__header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 0.75rem;
		}

		&__close-button {
			cursor: pointer;
			border: none;
			background: none;
			padding: 0;

			.icon {
				@include icon;

				height: 24px;
				width: 24px;
			}

			&:hover,
			&:focus {
				.icon {
					fill: $red;
				}
			}
		}
	}
</style>
