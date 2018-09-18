import {Recipe} from './../recipe.model';
import {ShoppingListService} from './../../shopping-list/services/shopping-list.service';
import {Ingredient} from './../../shared/ingredient.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'This is simple test',
      'http://szzljy.com/images/circle/circle6.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe('Cheese Burger', 'This is another simple test',
      // tslint:disable-next-line:max-line-length
      'http://szzljy.com/images/circle/circle6.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Cheese', 1)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  addRecipe(recipe: Recipe): number {
    let recipeId;
    recipeId = this.recipes.push(recipe); // Obtener el tamaño del vector.
    this.recipesChanged.next(this.recipes.slice());
    return --recipeId; // Retornar el índice del recipe (tamaño de vector - 1).
  }

  updateRecipe(recipe: Recipe, index: number) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1); // Elimina, a partir del índice seleccionado, 1 posición.
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(): Recipe[] {
    // Slice crea una copia del vector, lo que hace que el vector original no se pase por referencia.
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    /* Esta solución está bien, pero va a emitir un montón de eventos */
    /* No va a colgar la app, pero es innecesario, podrían agregarse todos los ingredientes de una */
    /*
    ingredients.forEach(ingredient => {
        this.shoppingListService.addNewIngredient(ingredient);
    });
    */

    /* Esta solución es mejor, se manda el vector completo.
    Además el servicio de shopping list es el único que toca el arreglo */
    this.shoppingListService.addNewIngredients(ingredients);
  }
}
