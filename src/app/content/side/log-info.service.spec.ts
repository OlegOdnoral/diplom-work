import { TestBed, inject } from '@angular/core/testing';

import { LogInfoService } from './log-info.service';
import { HttpModule } from "@angular/http";

describe('LogInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogInfoService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([LogInfoService], (service: LogInfoService) => {
    expect(service).toBeTruthy();
  }));
});
