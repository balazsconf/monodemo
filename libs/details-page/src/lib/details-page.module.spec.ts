import { async, TestBed } from '@angular/core/testing';
import { DetailsPageModule } from './details-page.module';

describe('DetailsPageModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DetailsPageModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DetailsPageModule).toBeDefined();
  });
});
