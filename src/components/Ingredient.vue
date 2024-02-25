<template>
	<h2>{{ name }} - {{ brand }}</h2>

	<ul>
		<li>kCal: {{ kcal }}</li>
		<li>Fat: {{ fat }}</li>
		<li>Saturated Fat: {{ saturatedFat }}</li>
		<li>Carbohydrate: {{ carbohydrate }}</li>
		<li>Sugars: {{ sugars }}</li>
		<li>Fibre: {{ fibre }}</li>
		<li>Protein: {{ protein }}</li>
		<li>Salt: {{ salt }}</li>
	</ul>
</template>

<script setup lang="ts">
import type { DocumentData } from 'firebase/firestore';

const props = defineProps<{ ingredient: DocumentData }>()

const { name, brand } = props.ingredient
const {
	kcal,
	fat,
	saturatedFat,
	carbohydrate,
	sugars,
	fibre,
	protein,
	salt
} = props.ingredient.nutrition
</script>