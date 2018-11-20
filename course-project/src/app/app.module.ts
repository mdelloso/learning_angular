import { RecipeService } from './recipes/services/recipe.service';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListService } from './shopping-list/services/shopping-list.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import {DataStorageService} from './shared/data-storage.service';
import {HttpModule} from '@angular/http';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth-guard-service';


@NgModule({
  declarations: [ // Se definen los componentes, directivas, pipes, etc.
    DropdownDirective,
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ErrorPageComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [  // Módulos de Angular.
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  // Si alguno de los servicios se declarasen locales a sus respectivos módulos, se destruirían cuando se pase a otro modulo.
  // Por ejemplo, si el RecipeService se declarara local al recipe-module, cuando se navegue a la shoppinglist, el servicio se destruirá
  // y, al volver al recipe module, empezará de 0. Esto provoca que todos los cambios realizados hasta el momento se pierdan.
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
