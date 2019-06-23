import {Injectable} from '@angular/core';

@Injectable()
export class TaskItem{
    id:number;
    task:string;
}

export interface TaskState{
    TaskItems:TaskItem[];
}

export interface AppState{
    Task:TaskState;
}