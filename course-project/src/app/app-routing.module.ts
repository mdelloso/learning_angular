import { ErrorPageComponent } from './error-page/error-page.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {HomeComponent} from './core/home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' }, // LoadChildren (Lazy Loading) canLoad: [AuthGuard]
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
    { path: '**', redirectTo: '/not-found' },
];

@NgModule({
    imports: [
        // preloadingStrategy permite precargar código según la estrategia seleccionada:
        // Por defecto no se precarga nada.
        // PreloadAllModules precarga to do. La idea es cargar en segundo plano los Lazy Loading y no cuando el usuario hace click.
        // Esto permite mejorar la velocidad de respuesta de la página.
        // Se pueden hacer estrategias personalizadas para cargar cosas si y otras cosas no.
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
        // Para direcciones con el # en el medio. Última sección del tutorial de ruteo (Understanding Location Strategies).
        // RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
