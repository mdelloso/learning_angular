import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';

export class CustomValidators {
    static invalidNamesValidator(control: FormControl): { [s: string]: boolean } {
        if (control.value === 'Test') {
            return { 'invalidProjectName': true };
        }
        return null; // Notar que no se pasa el objeto con 'false', se retorna null.
    }

    static invalidNamesValidatorAsync(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'Test Async') {
                    resolve({ 'invalidProjectName': true });
                } else {
                    resolve(null);
                }
            }, 1500);
        });
        return promise;
    }
}
