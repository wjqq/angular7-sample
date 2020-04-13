import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskDetailComponent} from './task/detail/task-detail.component'
import {TaskComponent} from './task/task.component'

const routes: Routes = [
  { path: 'detail/:id', component: TaskDetailComponent },
  { path: '', component: TaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
