<template>
	<header>
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/ingredients">Ingredients</RouterLink>
		</nav>

		<User />
	</header>
</template>

<script setup lang="ts">
	import User from './User.vue'
</script>
