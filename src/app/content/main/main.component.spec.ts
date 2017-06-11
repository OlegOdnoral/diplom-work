import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdTabsModule, MdGridListModule } from '@angular/material';

import { MainComponent } from './main.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UsercardComponent } from "app/content/main/usercard/usercard.component";
import { DoorcardComponent } from "app/content/main/doorcard/doorcard.component";
import { HttpModule } from "@angular/http";

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent, UsercardComponent, DoorcardComponent ],
      imports: [MdTabsModule,MdGridListModule,BrowserAnimationsModule,HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
