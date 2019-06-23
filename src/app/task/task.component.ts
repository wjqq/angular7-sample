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
  public message:string;

  componentRef: ComponentRef<DynamicComponent>;

  @ViewChild("alertContainer", { read: ViewContainerRef }) container: ViewContainerRef;
  constructor(public store:Store<AppState>, private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.store.select(x=>{return x}).subscribe(val=>{
      this.taskList=val['TaskReducer'];
    });
  }
  AddTask(id:number,task:string){
    this.store.dispatch({type:TaskActionsType.AddNewTask,payload:{id:id,task:task}});
  }

  createComponent(type: string) {
    this.container.clear();
    const factory: ComponentFactory<DynamicComponent> =
    this.resolver.resolveComponentFactory(DynamicComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.type = type;
    this.componentRef.instance.output.subscribe((msg: string) => this.handleOutput(msg));
   }

   handleOutput(msg: string){
     this.message = msg;
   }
}
