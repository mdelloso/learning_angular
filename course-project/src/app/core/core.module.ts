import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {ShoppingListService} from '../shopping-list/services/shopping-list.service';
import {RecipeService} from '../recipes/services/recipe.service';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';
import {AuthGuard} from '../auth/auth-guard-service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../shared/auth.interceptor';
import {LoggingInterceptor} from '../shared/logging.interceptor';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule  // Es necesario para el header.
  ],
  exports: [
    AppRoutingModule,  // Es necesario para toda la aplicación.
    HeaderComponent
  ],
  providers: [ShoppingListService, RecipeService,
    DataStorageService, AuthService, AuthGuard,
    // El orden que se da a los interceptors es el orden en que se ejecutran.
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
  ]
})
export class CoreModule {

}
