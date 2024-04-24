<template>
	<Header />
	<p>{{ id }}</p>
	<main>
		<RouterView v-if="user" />
	</main>
</template>

<script setup lang="ts">
	import { RouterView } from 'vue-router'
	import { useCurrentUser } from 'vuefire'
	import Header from './components/Header.vue'
	import useIdendifier from '@/hooks/useIdentifier'
	const id = useIdendifier(8)
	const user = useCurrentUser()
</script>

<style scoped></style>
