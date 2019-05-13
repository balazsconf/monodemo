import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemSharedComponent } from './list-item-shared.component';

describe('ListItemSharedComponent', () => {
  let component: ListItemSharedComponent;
  let fixture: ComponentFixture<ListItemSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
