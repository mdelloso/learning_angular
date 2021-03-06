import {ShoppingListService} from './services/shopping-list.service';
import {Ingredient} from './../shared/ingredient.model';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] = [];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => this.ingredients = ingredients
    );
  }

  onEditItem(itemIndex: number) {
    this.shoppingListService.startedEditing.next(itemIndex);
  }

  // Es necesario desuscribirse de los Subjects. Angular no lo hace solo.
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
