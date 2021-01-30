import { Injectable } from '@angular/core';
import { Resolve, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Conta } from '@shared/models/usuario';
import { ContasApiService } from '../api/contas-api.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ContasResolverService implements Resolve<Conta[]> {

  constructor(
    private api: ContasApiService,
    private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Conta[]> {
    return this.api.getList().pipe(
      catchError(_ => {
        this.router.navigate(['/not-found']);
        return of(null);
      })
    );

  }

}
