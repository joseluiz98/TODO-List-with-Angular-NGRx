import { CriarTarefa, IniciarTarefa } from './state/app.actions';
import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Task } from './task'
import { IAppState } from './state/app.state'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks$: Observable<Task[]>;

  constructor(private store: Store< IAppState >) {
    this.tasks$ = this.store.select('tasks')
  }

  public criarTarefa(nomeTarefa: string): void {
    this.store.dispatch(new CriarTarefa(new Task(nomeTarefa)));
  }

  public iniciarTarefa(task: Task): void {
    this.store.dispatch(new IniciarTarefa(task))
  }
}
