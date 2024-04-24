<template>
	<div>
		<label for="name">Name</label>
		<input name="name" type="text" :value="ingredient?.name" />

		<label for="brand"></label>
		<input name="brand" type="text" :value="ingredient?.brand" />

		<label for="kcal">kCal</label>
		<input name="kcal" type="text" :value="ingredient?.nutrition.kCal" />

		<label for="fat">Fat</label>
		<input name="fat" type="text" :value="ingredient?.nutrition.fat" />

		<label for="saturated-fat">Saturated Fat</label>
		<input name="saturated-fat" type="text" :value="ingredient?.nutrition.saturatedFat" />

		<label for="carbohydrate">Carbohydrate</label>
		<input name="carbohydrate" type="text" :value="ingredient?.nutrition.carbohydrate" />

		<label for="sugars">Sugars</label>
		<input name="sugars" type="text" :value="ingredient?.nutrition.sugars" />

		<label for="fibre">Fibre</label>
		<input name="fibre" type="text" :value="ingredient?.nutrition.fibre" />

		<label for="protein">Protein</label>
		<input name="protein" type="text" :value="ingredient?.nutrition.protein" />

		<label for="salt">Salt</label>
		<input name="salt" type="text" :value="ingredient?.nutrition.salt" />
	</div>

	<button>Save</button>
</template>

<script setup lang="ts">
	import { computed } from 'vue'
	import { useIngredientStore } from '@/stores/ingredients'

	const props = defineProps<{
		id?: string | null
	}>()

	const { getIngredient, editIngredient } = useIngredientStore()
	const ingredient = computed(() => {
		if (props.id) {
			return getIngredient(props.id)
		} else {
			return {
				name: '',
				brand: '',
				nutrition: {
					kcal: null,
					fat: null,
					saturatedFat: null,
					carbohydrate: null,
					sugars: null,
					fibre: null,
					protein: null,
					salt: null
				}
			}
		}
	})
</script>
