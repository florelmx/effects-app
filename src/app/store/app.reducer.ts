import * as reducers from './reducers';
import { ActionReducer, ActionReducerMap } from '@ngrx/store';

export interface AppState{
   usuarios: reducers.UsuariosState
   usuario: reducers.UsuarioState
}

export const AppReducers: ActionReducerMap<AppState> = {
   usuarios: reducers.usuariosReducer,
   usuario: reducers.usuarioReducer
}