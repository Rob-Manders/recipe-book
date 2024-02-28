<template>
	<Header />

	<main>
		<RouterView v-if="user" />
	</main>
</template>

<script setup lang="ts">
	import { RouterView } from 'vue-router'
	import { useCurrentUser } from 'vuefire'
	import Header from './components/Header.vue'

	const user = useCurrentUser()
</script>

<style scoped></style>
