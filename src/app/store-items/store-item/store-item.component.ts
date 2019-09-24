import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from '../../store/models/app.state.model';
import { Observable } from 'rxjs';
import { Ilist } from '../../store/models/list.interface';
import { FormControl, Validators } from '@angular/forms';
import { AddList, DeleteList, addToFavourites } from '../../store/actions/list.actions';
import * as uuid from 'uuid';




@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss']
})
export class StoreItemComponent implements OnInit {

  listItems$:Observable<Ilist[]>;
  listControl: FormControl;
 
  constructor(
      private store : Store<appState>
  ) {

    this.listControl = new FormControl( "", Validators.required );
   }

  ngOnInit() {
    this.listItems$ =  this.store.select( store => store.list );
  }

  onSave() {
    if(!this.listControl.valid){
          return ;
    }  

     let id = uuid.v4() , name = this.listControl.value;

     this.store.dispatch( new AddList(  {  id, name , isFavourite: false }  ) )
    
     this.listControl.reset();
 }
 
  deleteItem(itemId: string) {
    return  this.store.dispatch( new DeleteList(itemId))

  }
  addToFavourites( itemId: string ) {
    return  this.store.dispatch( new addToFavourites( itemId ) );
  }

}
