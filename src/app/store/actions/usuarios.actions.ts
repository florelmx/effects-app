import { Action } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const CARGAR_USUARIOS = '[Usuarios] Cargar usuario';
export const CARGAR_USUARIOS_FAIL = '[Usuarios] Cargar usuario Fail';
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] Cargar usuario Success';

export class CargarUsuarios implements Action {
   readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action {
   readonly type = CARGAR_USUARIOS_FAIL;

   constructor(public payload: any) { }
}

export class CargarUsuariosSucces implements Action {
   readonly type = CARGAR_USUARIOS_SUCCESS;

   constructor(public usuarios: Usuario[]) { }
}

export type usuariosAcciones = CargarUsuarios | CargarUsuariosFail | CargarUsuariosSucces;