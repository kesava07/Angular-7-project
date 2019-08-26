import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';


export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient("Rice", 200),
        new Ingredient("Green chilli", 15)
    ];

    getIngredients() {
        return this.ingredients.slice();

    }

    addIngredient(ingredient: Ingredient) {
        console.log(ingredient)
        if (ingredient.name && ingredient.amount) {
            this.ingredients.push(ingredient);
            this.ingredientsChanged.emit(this.ingredients.slice());
        } else alert("please add something")
    }
    
    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}