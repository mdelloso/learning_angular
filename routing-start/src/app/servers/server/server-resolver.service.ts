import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
    constructor(private serversService: ServersService) {

    }

    // No es necesario setear un observable porque, a diferencia de los componentes, los resolver corren cada vez que hay que renderizar.
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> |
        Promise<Server> | Server {
        return this.serversService.getServer(+route.params['id']);
    }
}
