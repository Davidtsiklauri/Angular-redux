import { Ilist } from '../models/list.interface';
import { listActions, ListActions  } from '../actions/list.actions';



export const initialState:Ilist[] = [
    {
        id:'kambla',
        name:'ToDo',
        isFavourite:false
    },
    {
        id:'kamblas',
        name:'ToDo',
        isFavourite:true
    }
];


export function listReducer(
    state: Ilist[] = initialState, 
    action: listActions
    ) {
       switch (action.type) {
           //Add To List
           case  ListActions.addList:
              return [...state , action.payload]
           // Remove From List 
           case  ListActions.deleteList:
                   
              return  state.filter( item => item.id !== action.payload )
            // Add To Favourites  
            
           case  ListActions.addToFavourites: 
               
              return state.map( item => {
                   if( item.id === action.payload ){
                         
                       return {
                          id: item.id,
                          name: item.name,
                          isFavourite: true
                       } as Ilist
                 
                   }    
                return item as Ilist  
              })

           // Remove From Favourites 
           case  ListActions.removeFromFavourites:

               return state.map( item => {
                    if( item.id === action.payload ) {

                        return {
                            id: item.id,
                            name: item.name,
                            isFavourite: false
                         } as Ilist

                    }
               return item as Ilist  
               })
           default:
              return state;
       }

 }