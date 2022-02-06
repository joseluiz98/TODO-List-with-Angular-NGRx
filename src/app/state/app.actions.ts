import { Action } from '@ngrx/store';

import { Task } from '../task'

export const ACTION_NOVA_TAREFA = '[APP] CRIAR TAREFA';
export const ACTION_INICIAR_TAREFA = '[APP] INICIAR TAREFA';


export class CriarTarefa implements Action {
  readonly type = ACTION_INICIAR_TAREFA;

  constructor(public payload?: Task) {}
}

export class IniciarTarefa implements Action {
  readonly type = ACTION_INICIAR_TAREFA;

  constructor(public payload?: Task) {}
}
