import { ShoppingListService } from './../services/shopping-list.service';
import { Component, OnInit} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onIngredientAdded(shoppingListForm: NgForm) {
    const value = shoppingListForm.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addNewIngredient(newIngredient);
  }

}
