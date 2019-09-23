import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { listReducer } from './store/reducers/list.reducers';

import { ReactiveFormsModule, FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent
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
