import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskDetailComponent} from './task/detail/task-detail.component'
import {TaskComponent} from './task/task.component'

import { STUDENTS_ROUTES } from './student/student.routes'
import {StudentModule} from './student/student.module'

const routes: Routes = [
  { path: 'detail/:id', component: TaskDetailComponent },
  { path: '', component: TaskComponent },

  //https://medium.com/@shairez/angular-routing-a-better-pattern-for-large-scale-apps-f2890c952a18
  //,
  //   {
  //     path: 'student',
  //     component: StudentComponent
  //   }
   {
     path: 'student',
     //option 1: route load eager
    // children: STUDENTS_ROUTES
     //option 2: route load lazy
     loadChildren: './student/student.module#StudentModule'
   }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
