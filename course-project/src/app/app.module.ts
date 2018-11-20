import {RecipeService} from './recipes/services/recipe.service';
import {AppRoutingModule} from './app-routing.module';
import {ShoppingListService} from './shopping-list/services/shopping-list.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {DataStorageService} from './shared/data-storage.service';
import {HttpModule} from '@angular/http';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth-guard-service';
import {RecipesModule} from './recipes/recipes.module';
import {SharedModule} from './shared/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {AuthModule} from './auth/auth.module';


@NgModule({
  // Si en el AppModule se quisiera usar algo de los otros modulos (como un selector), hay que exportarlo desde los otros módulos.
  // Para ruteo no es necesario. Es decir, en el modulo de ruteo podes usar componentes que estén declarados
  // en otros módulos sin tener que exportarlos.
  declarations: [ // Se definen los componentes, directivas, pipes, etc.
    AppComponent,
    HeaderComponent,
    ErrorPageComponent
  ],
  imports: [  // Módulos de Angular.
    BrowserModule, // Contiene el CommonModule y otras directivas para lanzar la applicación.
    SharedModule,
    AuthModule,
    RecipesModule, // RecipeModule debe estar antes que AppRoutingModule para que el catch-all y los wildcaard routers
                   // funcionen de manera correcta.
    ShoppingListModule,
    AppRoutingModule,
    HttpModule
  ],
  // Si alguno de los servicios se declarasen locales a sus respectivos módulos, se destruirían cuando se pase a otro modulo.
  // Por ejemplo, si el RecipeService se declarara local al recipe-module, cuando se navegue a la shoppinglist, el servicio se destruirá
  // y, al volver al recipe module, empezará de 0. Esto provoca que todos los cambios realizados hasta el momento se pierdan.
  // Por ejemplo: El RecipeService no puedo ponerlo en el recipe.module porque lo usa el header y shared. Se usa por toda la aplicación.
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
