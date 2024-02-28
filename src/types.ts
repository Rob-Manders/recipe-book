export interface Nutrition {
	kcal: number
	fat: number
	saturatedFat: number
	carbohydrate: number
	sugars: number
	fibre: number
	protein: number
	salt: number
}

export interface Ingredient {
	name: string
	brand: string
	nutrition: Nutrition
}

export interface Recipe {
	name: string
	ingredients: Ingredient[]
}
