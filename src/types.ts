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
	id: string
	name: string
	brand: string
	nutrition: Nutrition
}

export interface Recipe {
	id: string
	name: string
	ingredients: Ingredient[]
}
