import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MdCardModule,
  MdTabsModule,
  MdButtonModule,
  MdGridListModule
} from "@angular/material";

import { MainComponent } from "app/content/main/main.component";
import { DoorcardComponent } from "app/content/main/doorcard/doorcard.component";
import { UsercardComponent } from "app/content/main/usercard/usercard.component";

@NgModule({
  declarations: [MainComponent, DoorcardComponent, UsercardComponent],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdTabsModule,
    MdButtonModule,
    MdGridListModule
  ],
  exports: [MainComponent, DoorcardComponent, UsercardComponent],
  providers: []
})
export class MainModule {}
