import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

/*
    Para que un componente pueda injectar otros componentes, deben tener metadata asociada y
    el servicio que será importado debe estar declarado en el app.module.
    Para que el servicio pueda injectar otros servicios, tiene que tener el metada '@Injectable()'.
*/
@Injectable()
export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    /* Crear un evento que pueda ser lanzado por un componente y escuchado por otro */
    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService) { }

    addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
        this.loggingService.logStatusChange(status);
    }

    updateStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.loggingService.logStatusChange(newStatus);
    }
}
