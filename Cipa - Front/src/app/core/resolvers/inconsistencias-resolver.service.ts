import { Injectable } from '@angular/core';
import { Resolve, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Eleitor } from '@shared/models/eleitor';
import { EleicoesApiService } from '@core/api/eleicoes-api.service';


@Injectable({
  providedIn: 'root'
})
export class InconsistenciasResolverService implements Resolve<Eleitor> {

  constructor(private api: EleicoesApiService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Eleitor> {
    if (route.paramMap.has('id')) {
      const id: number = +route.paramMap.get('id');
      const eleicaoId = route.parent.params.id;
      return this.api.getInconsistencias(eleicaoId, id).pipe(
        catchError(_ => {
          this.router.navigate(['/not-found']);
          return of(null);
        })
      );
    } else {
      this.router.navigate(['/not-found']);
    }
  }

}
