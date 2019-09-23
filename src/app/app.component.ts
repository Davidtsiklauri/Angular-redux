import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from './store/models/app.state.model';
import { Observable } from 'rxjs';
import { Ilist } from './store/models/list.interface';
import { FormControl } from '@angular/forms';
import { AddList, DeleteList } from './store/actions/list.actions';
import * as uuid from 'uuid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  listItems$:Observable<Ilist[]>;
  listControl: FormControl;
  item:Ilist = { id: '' , name: '' };

  constructor(
    private store : Store<appState>
  ) {
    this.listControl = new FormControl( "" );
 }

  ngOnInit() {
      
    this.listItems$ =  this.store.select( store => store.list );

  }
 
  onSave() {
    
      this.item.id = uuid.v4();
      this.item.name = this.listControl.value; 
      this.store.dispatch( new AddList( this.item ) )

      this.listControl.reset();
  }
  
  deleteItem(item: number) {
     this.store.dispatch( new DeleteList(item))
  
  }
}
