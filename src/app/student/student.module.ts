//link: https://appdividend.com/2018/12/09/how-to-create-angular-modules-to-organize-code/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentListItemComponent } from './student-list-item/student-list-item.component';
import { Routes, RouterModule } from '@angular/router';
import { STUDENTS_ROUTES } from './student.routes'

@NgModule({
  declarations: [StudentComponent, StudentListComponent, StudentListItemComponent],
  imports: [
    CommonModule,

    //https://medium.com/@shairez/angular-routing-a-better-pattern-for-large-scale-apps-f2890c952a18
    //option 2: route load lazy
    RouterModule.forChild(STUDENTS_ROUTES),
  ]
})
export class StudentModule { }
