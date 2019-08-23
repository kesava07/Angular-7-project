import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Rice", 200),
    new Ingredient("Green chilli", 15)
  ];

  onaddingList(list: Ingredient) {
    if (list.name && list.amount) {
      this.ingredients.push(list);
    } else alert("please add something")
  }
  constructor() { }

  ngOnInit() {
  }

}
