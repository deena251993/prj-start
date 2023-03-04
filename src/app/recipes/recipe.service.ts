import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService{
 // recipeSelected = new EventEmitter<Recipe>();
 //recipeSelected = new Subject<Recipe>();
  recipesChanged = new Subject<Recipe[]>();
//   private recipes: Recipe[] = [
//         new Recipe(
//          'Tasty Schintzel',
//          'Super tasty Schintzel - just awesome!!!',
//          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWfaspW_okWminOdZy0Z58YfhCl71DqWCExQ&usqp=CAU',
//          [
//          new Ingredient('Meat',1),
//          new Ingredient('French Fries',20)
//          ]),
//         new Recipe(
//           'Big Fat Burger',
//           'This is simply a delicious burger!!!',
//           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHKZnSDsNJuGCscmTcBqfkF4OauUjMknkGfQ&usqp=CAU',
//           [
//           new Ingredient('Buns',2),
//           new Ingredient('Meat',1)
//          ])
//       ];
  private recipes: Recipe[] = [];
  constructor(private slService:ShoppingListService){

  }
  setRecipes(recipes:Recipe[]){
     this.recipes = recipes;
     this.recipesChanged.next(this.recipes.slice());
  }
  getRecipes(){
        return this.recipes.slice();
  }
  getRecipe(index:number){
        return this.recipes.slice()[index];
  }
  addIngredientsToShoppingList(ingredients:Ingredient[]){
      this.slService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe){
     this.recipes.push(recipe);
     this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index:number,newRecipe:Recipe){
     this.recipes[index]=newRecipe;
     this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index:number){
     this.recipes.splice(index,1);
     this.recipesChanged.next(this.recipes.slice());
  }
}