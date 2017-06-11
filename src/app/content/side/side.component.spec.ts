import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideComponent } from './side.component';
import { MdCardModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpModule } from "@angular/http";

describe('SideComponent', () => {
  let component: SideComponent;
  let fixture: ComponentFixture<SideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideComponent ],
      imports: [MdCardModule,BrowserAnimationsModule,HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
