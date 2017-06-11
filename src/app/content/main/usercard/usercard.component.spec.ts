import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdCardModule } from '@angular/material';

import { UsercardComponent } from './usercard.component';

describe('UsercardComponent', () => {
  let component: UsercardComponent;
  let fixture: ComponentFixture<UsercardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercardComponent ],
      imports: [MdCardModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercardComponent);
    component = fixture.componentInstance;
    component.user = {name: 'Oleg Odnoral', accessLevel: 5, cardUuid: '123456'}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
