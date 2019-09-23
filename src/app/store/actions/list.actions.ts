import { Action } from '@ngrx/store';

import { Ilist } from '../models/list.interface';


export enum ListActions  {
   
     addList = '[List] Add List',
     deleteList = '[List] Delete List'
}

export class AddList implements Action {
     public readonly type = ListActions.addList;
     constructor( public payload:Ilist ) {}
}

export class  DeleteList implements Action {
     public readonly type = ListActions.deleteList;
     constructor( public payload: number ) {}

}

export type listActions = AddList | DeleteList;