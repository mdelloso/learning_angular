import {Injectable} from '@angular/core';

import {RecipeService} from '../recipes/services/recipe.service';
import {map} from 'rxjs/operators';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();

    // Para seguir agregando headers o parametros se utiliza append.
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const params = new HttpParams().set('auth', token);

    /*
    return this.httpClient.put('https://ng-recipe-book-5d809.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      { // Se puede observar la respuesta de la petición put.
        observe: 'body',
        params: params,
        headers: headers
      });
    */

    // Esta forma permite monitorear el progreso de la petición. Es útil para subir y bajar files.
    const request = new HttpRequest('PUT', 'https://ng-recipe-book-5d809.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {
        reportProgress: true,
      });

    // Ejecutar la request http creada.
    return this.httpClient.request(request);
  }

  // El operador map, toma el dato y lo wrapea en un nuevo observable. En este caso, recipe será wrapeado en un observable.
  getRecipes() {
    const token = this.authService.getToken();
    return this.httpClient.get<Recipe[]>('https://ng-recipe-book-5d809.firebaseio.com/recipes.json?auth=' + token,
      { // Puede omitirse, body y json son las por defecto.
        observe: 'body',  // Se puede observar 'response' sería toda la respuesta, sólo el body, header, etc.
        responseType: 'json'  // El formato, puede ser json (defecto), text, blob, etc.
      }).pipe(map((recipes) => {
        // Es posible hacerle algún cambio a los datos antes de devolverlos. Por ejemplo:
        for (const recipe of recipes) { // Por si el arreglo de ingredientes viene vacío de la base.
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        this.recipeService.setRecipes(recipes);
        return recipes;
      }
      )
    );
  }

}
