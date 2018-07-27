import { Recipe } from './../recipe.model';
import { ShoppingListService } from './../../shopping-list/services/shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class RecipeService {

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

    constructor(private shoppingListService: ShoppingListService) {}

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

        /* Esta solución es mejor, se manda todo de una.
        Además el servicio de shopping list es el único que toca el arreglo */
        this.shoppingListService.addNewIngredients(ingredients);
    }
}
