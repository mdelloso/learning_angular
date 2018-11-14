import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import {RecipeService} from '../recipes/services/recipe.service';
import {map} from 'rxjs/operators';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://ng-recipe-book-5d809.firebaseio.com/recipes.json?auth=' + token,
      this.recipeService.getRecipes(), {headers: headers});
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get('https://ng-recipe-book-5d809.firebaseio.com/recipes.json?auth=' + token).pipe(
      map( // El operador map, toma el dato y lo wrapea en un nuevo observable. En este caso, recipe será wrapeado en un observable.
        (response: Response) => {
          const recipes: Recipe[] = response.json(); // el método json parsea el json a un objecto JavaScript.
          // Es posible hacerle algún cambio a los datos antes de devolverlos. Por ejemplo:
          for (const recipe of recipes) { // Por si el arreglo de ingredientes viene vacío de la base.
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          this.recipeService.setRecipes(recipes);
          return response;
        }
      )
    );
  }

}
