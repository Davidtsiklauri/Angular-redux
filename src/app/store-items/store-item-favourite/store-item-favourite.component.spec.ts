import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreItemFavouriteComponent } from './store-item-favourite.component';

describe('StoreItemFavouriteComponent', () => {
  let component: StoreItemFavouriteComponent;
  let fixture: ComponentFixture<StoreItemFavouriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreItemFavouriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreItemFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
