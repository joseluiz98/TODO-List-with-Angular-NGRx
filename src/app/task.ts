
export enum StatusTarefa {
  TODO = 'TODO',
  DOING = 'DOING'
}

export class Task {
  public nome: string = '';
  public status: StatusTarefa = StatusTarefa.TODO;

  constructor(nome: string, status: StatusTarefa = StatusTarefa.TODO) {
    this.nome = nome;
    this.status = status;
  }
}
