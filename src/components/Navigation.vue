<template>
	<nav class="navigation">
		<RouterLink class="navigation__link" to="/">Recipes</RouterLink>
		<RouterLink class="navigation__link" to="/ingredients">Ingredients</RouterLink>
	</nav>
</template>

<style scoped lang="scss">
	@use '@/scss/palette' as *;

	.navigation {
		height: 56px;
		margin-left: 0.25rem;

		&__link {
			display: inline-block;
			position: relative;
			height: 100%;
			font-size: 1.25rem;
			color: #ffffff;
			opacity: 0.9;
			text-decoration: none;
			transition: 150ms;
			padding: 1rem 0.5rem;

			&:hover {
				color: $secondary;
				opacity: 1;
			}

			&.router-link-active::after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0.25rem;
				right: 0.25rem;
				height: 5px;
				background-color: $secondary;
				border-top-left-radius: 5px;
				border-top-right-radius: 5px;
			}
		}
	}
</style>
