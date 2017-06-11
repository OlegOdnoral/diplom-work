import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdToolbarModule, MdSidenavModule, MdCardModule } from '@angular/material';

import { ContentComponent } from './content.component';
import { SideComponent } from './side/side.component';
import { MainComponent } from "app/content/main/main.component";
import { UsercardComponent } from "app/content/main/usercard/usercard.component";
import { DoorcardComponent } from "app/content/main/doorcard/doorcard.component";
import { HttpModule } from "@angular/http";

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentComponent, SideComponent, MainComponent, UsercardComponent, DoorcardComponent ],
      imports: [MdToolbarModule, MdSidenavModule, MdCardModule, HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
