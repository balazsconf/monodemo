import { async, TestBed } from '@angular/core/testing';
import { DetailsModule } from './details.module';

describe('DetailsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DetailsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DetailsModule).toBeDefined();
  });
});
