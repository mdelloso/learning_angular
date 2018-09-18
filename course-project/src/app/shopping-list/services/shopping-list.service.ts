import {Subject} from 'rxjs';
import {Ingredient} from './../../shared/ingredient.model';

export class ShoppingListService {
  private ingredients = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredient(itemIndex: number): Ingredient {
      return this.ingredients[itemIndex];
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

  updateIngredient(itemIndex: number, newIngredient: Ingredient) {
    this.ingredients[itemIndex] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(itemIndex: number) {
    this.ingredients.splice(itemIndex, 1); // Elimina, a partir del índice seleccionado, 1 posición.
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
