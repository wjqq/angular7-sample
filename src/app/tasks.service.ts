import { Injectable } from '@angular/core';
import {} from '@ngrx/store';
import {AppState,TaskItem} from './store/state/task.state'
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  nextIndex: any = 0;
  public taskList:TaskItem[]=[
    {id:2,task:'task 2'},
    {id:3,task:'task 3'},
    {id:4,task:'task 4'},
    {id:5,task:'task 5'},
    {id:6,task:'task 6'},
    {id:7,task:'task 7'},
    {id:8,task:'task 8'},
    {id:9,task:'task 9'}];
  public task1:TaskItem = {id:100,task:'third task'};
  private apiURL='https://jsonplaceholder.typicode.com/todos/1';
  constructor(
    public _http:HttpClient
  ) {
  }

  addTasks():Observable<TaskItem>{
    return of(this.taskList[this.nextIndex++]);
  }


}
