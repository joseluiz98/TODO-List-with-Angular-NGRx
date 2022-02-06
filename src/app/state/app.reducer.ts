import { ACTION_INICIAR_TAREFA, ACTION_NOVA_TAREFA } from './app.actions'


import { StatusTarefa, Task } from '../task'


const INITIAL_STATE: Task = {
  nome: 'nova tarefa',
  status: StatusTarefa.TODO
}

export const appReducer = (state: Task[] = [INITIAL_STATE], action:  any) => {
  switch (action.type) {
    // MENCIONAR QUE NÃO PODEMOS ALTERAR DIRETAMENTE OS ATRIBUTOS DO STATE, ELE É IMUTÁVEL
    case ACTION_NOVA_TAREFA:
      return [...state, action.payload]
    case ACTION_INICIAR_TAREFA:
      return state.map(task => {
        let newTask = {...task};
        if (task.nome === action.payload.nome) {
          newTask.status = StatusTarefa.DOING
        }
        return newTask
      })
    default:
      return state;
  }
}
