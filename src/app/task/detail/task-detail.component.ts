import { Component, OnInit,ViewChild, ViewContainerRef, ComponentFactory,
  ComponentRef, ComponentFactoryResolver } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
import { TaskItem } from 'src/app/store/state/task.state';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: []
})
export class TaskDetailComponent implements OnInit {

  taskItem: TaskItem;

  getTaskDetail() {
    const id = +this.route.snapshot.paramMap.get('id');
    //load details
    this.taskItem =  new TaskItem();
    this.taskItem.id = id;
  }

  constructor( private route: ActivatedRoute){
    this.getTaskDetail();
  }

  ngOnInit() {
  }
}
