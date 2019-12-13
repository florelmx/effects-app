import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects'
import * as usuariosActions from '../actions';
import { mergeMap, exhaustMap, map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { of } from 'rxjs'

@Injectable()
export class UsuariosEffects {

   constructor(
      private actions$: Actions,
      private usuariosService: UsuarioService
   ) { }

   @Effect()
   cargarUsuarios$ = this.actions$.pipe(
      ofType(usuariosActions.CARGAR_USUARIOS),
      switchMap(() => {
         return this.usuariosService.getUsers()
            .pipe(
               map(users => new usuariosActions.CargarUsuariosSucces(users)),
               catchError(error => of(new usuariosActions.CargarUsuariosFail(error)))
            );
      }),
      map(action => {
         console.log(action)
         return action;
      })
   )
}