import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { Component } from '@angular/core';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuard} from './auth/auth-guard-service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            // Los parámetros estáticos deben estar antes que los dinámicos sino angular va a intentar parcear
            // el new como un id dinámico.
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]},        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
    { path: '**', redirectTo: '/not-found' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
        // Para direcciones con el # en el medio. Ultima sección del tutorial de ruteo (Understanding Location Strategies).
        // RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
