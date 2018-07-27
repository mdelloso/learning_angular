import { Subject } from 'rxjs';

export class UsersService {
    // El subject vendría a reemplazar al EventEmitter. Es un objeto que es Observer y Observable al mismo tiempo.
    userActivated = new Subject();
}
