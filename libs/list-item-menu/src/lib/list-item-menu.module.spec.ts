import { async, TestBed } from '@angular/core/testing';
import { ListItemMenuModule } from './list-item-menu.module';

describe('ListItemMenuModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ListItemMenuModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ListItemMenuModule).toBeDefined();
  });
});
