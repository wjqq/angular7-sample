import { Effect, Actions, ofType } from "@ngrx/effects";
import {TaskActionsType} from '../actions/task.actions';
import { Injectable } from '@angular/core';
import {map, switchMap, catchError} from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { TasksService } from 'src/app/tasks.service';

@Injectable()
export class TaskEffects{

    @Effect()
    $addTask=this.actions.pipe(
        ofType(TaskActionsType.AddNewTask),
        switchMap(()=>this._service.addTasks().pipe(
            //Emit a success action when api response is successfull
            map(task=>({type:TaskActionsType.AddNewTaskSuccess,payload:task})),
            //Emit a failure action on api error
            catchError(error=>{return error})
        ))
    );

    constructor(
        public actions:Actions,
        public _service:TasksService
    ){  
    }
}