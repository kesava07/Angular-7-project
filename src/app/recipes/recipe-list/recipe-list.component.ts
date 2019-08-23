import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Biryani", "Special handi biryani", "https://assets.limetray.com/assets/image_manager/uploads/5128/Malamal%20Gosht%20Biryani%20(2).jpg"),
    new Recipe("Grill chiken", "Specilal rosated smoked grilled chicken", "https://www.simplyrecipes.com/wp-content/uploads/2016/10/2016-10-26-OvenBBQChicken-7.jpg")
  ];

  onSelectRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
