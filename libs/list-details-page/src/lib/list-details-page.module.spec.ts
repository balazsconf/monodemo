import { async, TestBed } from '@angular/core/testing';
import { ListDetailsPageModule } from './list-details-page.module';

describe('ListDetailsPageModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ListDetailsPageModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ListDetailsPageModule).toBeDefined();
  });
});
