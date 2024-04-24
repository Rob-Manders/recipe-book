export interface Nutrition {
	kcal: number | null
	fat: number | null
	saturatedFat: number | null
	carbohydrate: number | null
	sugars: number | null
	fibre: number | null
	protein: number | null
	salt: number | null
}

export interface Ingredient {
	name: string
	nutrition: Nutrition
}

export interface Recipe {
	name: string
	ingredients: Ingredient[]
}
