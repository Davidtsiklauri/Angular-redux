import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { listReducer } from './store/reducers/list.reducers';

import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { StoreItemComponent } from './store-items/store-item/store-item.component'
import { StoreItemsComponent } from './store-items/store-items.component';
import { StoreItemFavouriteComponent } from './store-items/store-item-favourite/store-item-favourite.component'

@NgModule({
  declarations: [
    AppComponent,
    StoreItemsComponent,
    StoreItemComponent,
    StoreItemFavouriteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({
       list: listReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
