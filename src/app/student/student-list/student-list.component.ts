// student-list.component.ts

import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

    students: Student[] = [];

    constructor(private studentservice: StudentService) { }

    ngOnInit() {
        const studentObservable = this.studentservice.getStudents();
        studentObservable.subscribe((studentsData: Student[]) => {
            this.students = studentsData;
        });
    }
}