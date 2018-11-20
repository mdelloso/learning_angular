import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {AuthGuard} from '../auth/auth-guard-service';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';

const recipesRoutes: Routes = [
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      // Los parámetros estáticos deben estar antes que los dinámicos sino angular va a intentar parcear
      // el new como un id dinámico.
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]},
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes) // Sólo se llama forRoot en el root module. Para lo otro se usa forChild().
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
