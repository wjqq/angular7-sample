import {TaskActionsType} from '../actions/task.actions';
import {AppState, TaskItem} from '../state/task.state';

const initialTask:TaskItem[]=[{id:1,task:'task 1'}]

export function TaskReducer(
    state:TaskItem[]=initialTask,
    action:{type:any,payload:TaskItem[]}
){
    
    switch (action.type) {
        case TaskActionsType.AddNewTask:
            //call before effect method
            return state;
            break;
        case TaskActionsType.AddNewTaskSuccess:
            return [...state, action.payload];
            break;
        case TaskActionsType.Failure:
            return state
            break;        
        default:
            return state;
            break;
    }
}