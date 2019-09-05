import { EventEmitter, Injectable } from '@angular/core'
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

    selectedRecipe = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe(
            "Biryani",
            "Special handi biryani",
            "https://assets.limetray.com/assets/image_manager/uploads/5128/Malamal%20Gosht%20Biryani%20(2).jpg",
            [new Ingredient("Chicken", 2),
            new Ingredient("onions", 3)]
        ),
        new Recipe(
            "Grill chiken",
            "Specilal rosated smoked grilled chicken",
            "https://www.simplyrecipes.com/wp-content/uploads/2016/10/2016-10-26-OvenBBQChicken-7.jpg",
            [new Ingredient("Bone less chicken", 2),
            new Ingredient("onions", 3)]
        )
    ];

    constructor(private slService: ShoppingListService) { }

    getAllRecipies() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
    }

    getRecipe(index: number) {
        return this.recipes[index]
    }

};