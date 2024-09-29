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
	id: string
	name: string
	nutrition: Nutrition
}

export interface RecipeIngredient {
	amount: int,
	ingredientId: string
}

export interface Recipe {
	id: string,
	name: string
	description: string,
	portions: number,
	ingredients: RecipeIngredient[]
}
