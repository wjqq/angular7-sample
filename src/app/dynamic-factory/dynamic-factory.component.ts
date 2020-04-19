import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DynamicComponent } from '../alter/alter.component';
import {ViewChild, ViewContainerRef, ComponentFactory,  ComponentRef, ComponentFactoryResolver} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, TaskState } from '../store/state/task.state';

@Component({
  selector: 'app-dynamic-factory',
  templateUrl: './dynamic-factory.component.html',
  styleUrls: ['./dynamic-factory.component.css']
})
export class DynamicFactoryComponent implements OnInit {

  ngOnInit() {
  }

  public message: number = 1;
  componentRef: ComponentRef<DynamicComponent>;

  @ViewChild("alertContainer", { read: ViewContainerRef }) container: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }

  createComponent(type: string) {
    this.container.clear();
    const factory: ComponentFactory<DynamicComponent> = this.resolver.resolveComponentFactory(DynamicComponent);
    this.componentRef = this.container.createComponent(factory);

    //Pass type to the conponent created dynamically
    this.componentRef.instance.type = type;
    this.componentRef.instance.count = this.message;

    //Subscribe the data emit from child component
    this.componentRef.instance.output.subscribe((msg: number) => {
      console.log("receive event from child component" + msg);
      return this.handleOutput(msg);
    });
  }

  handleOutput(msg: number) {
    this.message = msg;
  }
}
