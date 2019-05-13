import { async, TestBed } from '@angular/core/testing';
import { ListItemTouchModule } from './list-item-touch.module';

describe('ListItemTouchModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ListItemTouchModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ListItemTouchModule).toBeDefined();
  });
});
