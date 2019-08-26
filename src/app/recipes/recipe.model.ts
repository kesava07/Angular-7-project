import { Ingredient } from '../shared/ingredients.model';

export class Recipe {
    // public name: string;
    // public description: string;
    // public imagePath: string;
    constructor(public name: string, public description: string, public imagePath: string,public ingredients: Ingredient[]) {
        // this.name = name;
        // this.description = desc;
        // this.imagePath = imagePath;
    }
}