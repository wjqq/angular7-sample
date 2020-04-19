import { Component, OnInit,ViewChild, ViewContainerRef, ComponentFactory,
  ComponentRef, ComponentFactoryResolver } from '@angular/core';
import {Store} from '@ngrx/store';
import { AppState, TaskState } from '../store/state/task.state';
import { TaskActionsType } from '../store/actions/task.actions';
import {DynamicComponent} from '../alter/alter.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public taskList:TaskState;
  // public message:string;

  // componentRef: ComponentRef<DynamicComponent>;

  // @ViewChild("alertContainer", { read: ViewContainerRef }) container: ViewContainerRef;
 constructor(public store:Store<AppState>) { }

  ngOnInit() {
    this.store.select(x=>{return x}).subscribe(val=>{
      this.taskList=val['TaskReducer'];
    });
  }
  AddTask(task:string){
    this.store.dispatch({type:TaskActionsType.AddNewTask,payload:{task:task}});
  }
}
