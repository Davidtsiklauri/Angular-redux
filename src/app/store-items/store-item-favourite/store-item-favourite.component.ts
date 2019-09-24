import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from '../../store/models/app.state.model';
import { Observable } from 'rxjs';
import { Ilist } from '../../store/models/list.interface';
import { removeFromFavourites } from '../../store/actions/list.actions';
@Component({
  selector: 'app-store-item-favourite',
  templateUrl: './store-item-favourite.component.html',
  styleUrls: ['./store-item-favourite.component.scss']
})
export class StoreItemFavouriteComponent implements OnInit {
  
  listItems$:Observable<Ilist[]>;
   
  constructor(
     private store: Store<appState>
  ) { }

  ngOnInit() {
     this.listItems$ = this.store.select('list');
  }
  removeFromFavourites(itemId: string) {
     return this.store.dispatch( new removeFromFavourites( itemId ) );
  }
}
