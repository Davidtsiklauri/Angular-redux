import { Action } from '@ngrx/store';

import { Ilist } from '../models/list.interface';


export enum ListActions  {
   
     addList = '[List] Add List',
     deleteList = '[List] Delete List',
     addToFavourites = '[List] Add addToFavourites',
     removeFromFavourites = '[List] Add removeFromFavourites'
}

export class AddList implements Action {
     public readonly type = ListActions.addList;
     constructor( public payload:Ilist ) {}
}

export class  DeleteList implements Action {
     public readonly type = ListActions.deleteList;
     constructor( public payload: string ) {}

}

export class addToFavourites implements Action {
      public readonly type = ListActions.addToFavourites;
      constructor( public payload: string  ) {}

}

export class removeFromFavourites implements Action {
     public readonly type = ListActions.removeFromFavourites
     constructor( public payload: string ) {}
}

export type listActions = AddList | DeleteList | addToFavourites | removeFromFavourites;