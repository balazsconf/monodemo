import { async, TestBed } from '@angular/core/testing';
import { ListItemSharedModule } from './list-item-shared.module';

describe('ListItemSharedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ListItemSharedModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ListItemSharedModule).toBeDefined();
  });
});
