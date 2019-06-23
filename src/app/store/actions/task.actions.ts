import { Action } from '@ngrx/store';

//Actions
export namespace TaskActionsType{
    export const AddNewTask='ADD NEW TASK';
    export const AddNewTaskSuccess='ADD NEW TASK Success';
    export const DeleteTask='DELETE A TASK';
    export const Failure='ACTION_FAILED';
}

export class AddNewTask implements Action {
    readonly type = TaskActionsType.AddNewTask;
}

export class AddNewTaskSuccess  implements Action {
    readonly type = TaskActionsType.AddNewTaskSuccess;
}

export class DeleteTask{
    readonly DeleteTask = TaskActionsType.DeleteTask;
}

export class Failure{
    readonly Failure=TaskActionsType.Failure;
}

export type TaskActions= AddNewTask | DeleteTask |  Failure;