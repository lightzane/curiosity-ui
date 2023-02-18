import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../material/material.module';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MaterialModule]
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
