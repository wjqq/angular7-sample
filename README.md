# angular7-sample

1 - this project is based on ng-cli 7.3.2
2 - ng serve to start at http://localhost:4200

task.component: Initiallly it load the first task, add a new task when you click the button "add another task", I have a task array in the effect service to simuldate the action on database.

alter.components(DynamicComponent): which will be present when you click the "create danger alert" in the page. it is generated dynamically.


A Complete Guide To Routing In Angular
https://www.smashingmagazine.com/2018/11/a-complete-guide-to-routing-in-angular/


Styling An Angular Application With Bootstrap
https://www.smashingmagazine.com/2019/02/angular-application-bootstrap/

Lazy load route and eager load route

https://medium.com/@shairez/angular-routing-a-better-pattern-for-large-scale-apps-f2890c952a18

Lazy load:

1 - don't need to import feature Module
    //StudentModule,

2 - Routes defined in app-routing.module like this.
    {
        path: 'student',
        loadChildren: './student/student.module#StudentModule'
    }

3 - In the child Module, import routes like this.

@NgModule({
  ...
  imports: [
    ....
    RouterModule.forChild(STUDENTS_ROUTES),
  ]
})
export class StudentModule { }

Eager load:

1 - Need to import feature Module in root Module

@NgModule({
  .....
  imports: [
    StudentModule,
  ],
  .....
})
export class AppModule {}

2 - Routes defined in app-routing.module like this.

  {
    path: 'student',
    children: STUDENTS_ROUTES
  }
