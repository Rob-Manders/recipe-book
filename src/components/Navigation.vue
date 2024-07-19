<template>
	<nav class="navigation">
		<RouterLink to="/">Recipes</RouterLink>
		<RouterLink to="/ingredients">Ingredients</RouterLink>
	</nav>
</template>

<style lang="scss">
	@use '@/scss/palette' as *;

	.navigation {
		a {
			position: relative;
			font-size: 1.25rem;
			color: #ffffff;
			opacity: 0.9;
			text-decoration: none;
			height: 100%;
			transition: 150ms;

			&:hover {
				color: $secondary;
				opacity: 1;
			}

			+ a {
				margin-left: 0.75rem;
			}

			&.router-link-active::after {
				content: '';
				position: absolute;
				bottom: -1rem;
				left: 0;
				right: 0;
				height: 5px;
				background-color: $secondary;
				border-top-left-radius: 5px;
				border-top-right-radius: 5px;
			}
		}
	}
</style>
