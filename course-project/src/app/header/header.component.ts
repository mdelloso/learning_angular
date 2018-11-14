import { Component } from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import { Response} from '@angular/http';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }


 onSaveData() {
    /* Ahora sí, al suscribirse al observable el request se va a enviar *!/
    /* No es necesario desuscribirse de este observable ya que angular lo va a limpiar cuando llegue la respuesta */
    this.dataStorageService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  public getAuthService() {
    return this.authService;
  }

  onLogout() {
    this.authService.logout();
  }
}
