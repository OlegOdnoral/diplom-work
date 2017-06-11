import { TestBed, inject } from '@angular/core/testing';

import { GetDataService } from './get-data.service';
import { HttpModule } from "@angular/http";

describe('GetDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDataService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([GetDataService], (service: GetDataService) => {
    expect(service).toBeTruthy();
  }));
});
