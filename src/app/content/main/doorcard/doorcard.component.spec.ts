import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdCardModule, MdButtonModule } from '@angular/material';

import { DoorcardComponent } from './doorcard.component';

describe('DoorcardComponent', () => {
  let component: DoorcardComponent;
  let fixture: ComponentFixture<DoorcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorcardComponent ],
      imports: [MdCardModule,MdButtonModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorcardComponent);
    component = fixture.componentInstance;
    component.door = {place: 'Service Room', accessLevel: 3, macAdress: '123456'}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
