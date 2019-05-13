import { async, TestBed } from '@angular/core/testing';
import { ListPageModule } from './list-page.module';

describe('ListPageModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ListPageModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ListPageModule).toBeDefined();
  });
});
