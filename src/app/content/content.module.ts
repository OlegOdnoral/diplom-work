import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdSidenavModule } from '@angular/material';


import { ContentComponent } from "app/content/content.component";
import { MainModule } from "app/content/main/main.module";
import { SideModule } from "app/content/side/side.module";
import { SideComponent } from "app/content/side/side.component";


@NgModule({
  declarations: [
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdSidenavModule,
    SideModule,
    MainModule
  ],
  providers: [],
})
export class ContentModule { }
