<template>
	<header>
		<Navigation />
		<User />
	</header>
</template>

<script setup lang="ts">
	import Navigation from './Navigation.vue'
	import User from './User.vue'
</script>

<style lang="scss">
	@use '@/scss/palette' as *;

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: $primary;
		height: 56px;
	}
</style>
