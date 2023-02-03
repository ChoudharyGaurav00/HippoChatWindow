import { TestBed } from '@angular/core/testing';

import { LogoColorService } from './logo-color.service';

describe('LogoColorService', () => {
  let service: LogoColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
