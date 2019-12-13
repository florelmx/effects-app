import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects'
import * as usuarioActions from '../actions';
import { mergeMap, exhaustMap, map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { of } from 'rxjs'

@Injectable()
export class UsuarioEffects {

   constructor(
      private actions$: Actions,
      private usuarioService: UsuarioService
   ) { }

   @Effect()
   cargarUsuario$ = this.actions$.pipe(
      ofType(usuarioActions.CARGAR_USUARIO),
      switchMap(action => {
         return this.usuarioService.getUserById(action['id'])
            .pipe(
               map(user => new usuarioActions.CargarUsuarioSucces(user)),
               catchError(error => of(new usuarioActions.CargarUsuarioFail(error)))
            );
      }),
      map(action => {
         console.log(action)
         return action;
      })
   )
}