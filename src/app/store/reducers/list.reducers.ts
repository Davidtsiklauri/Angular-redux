import { Ilist } from '../models/list.interface';
import { listActions, ListActions } from '../actions/list.actions';



export const initialState:Ilist[] = [
    {
        id:'kambla',
        name:'ToDo'
    },
    {
        id:'kamblas',
        name:'ToDo'
    }
];


export function listReducer(
    state: Ilist[] = initialState, 
    action: listActions
    ) {
       switch (action.type) {
           case ListActions.addList:
              return [...state , action.payload]

           case   ListActions.deleteList:
                 state.splice( action.payload , 1 );
              return [...state]

           default:
              return state;
       }

 }