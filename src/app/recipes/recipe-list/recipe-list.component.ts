import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Biryani", "Special handi biryani", "https://assets.limetray.com/assets/image_manager/uploads/5128/Malamal%20Gosht%20Biryani%20(2).jpg"),
    new Recipe("Biryani", "Special handi biryani", "https://assets.limetray.com/assets/image_manager/uploads/5128/Malamal%20Gosht%20Biryani%20(2).jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
