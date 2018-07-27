import { Subject } from 'rxjs';
import { Ingredient } from './../../shared/ingredient.model';

export class ShoppingListService {
    private ingredients = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    ingredientsChanged = new Subject<Ingredient[]>();

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addNewIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addNewIngredients(newIngredients: Ingredient[]) {
        /* Spread Operator (...): devuelve todos los elementos del arreglo */
        this.ingredients.push(...newIngredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
