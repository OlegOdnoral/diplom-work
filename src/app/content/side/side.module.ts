import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MdCardModule } from "@angular/material";

import { SideComponent } from "app/content/side/side.component";

@NgModule({
  declarations: [SideComponent],
  imports: [HttpModule, BrowserModule, BrowserAnimationsModule, MdCardModule],
  exports: [SideComponent],
  providers: []
})
export class SideModule {}
