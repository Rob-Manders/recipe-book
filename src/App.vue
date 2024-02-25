<template>
	<header>
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/ingredients">Ingredients</RouterLink>
		</nav>
	</header>

	<RouterView />
</template>

<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped></style>
