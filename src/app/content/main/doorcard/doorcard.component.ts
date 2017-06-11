import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doorcard',
  templateUrl: './doorcard.component.html',
  styleUrls: ['./doorcard.component.css']
})
export class DoorcardComponent implements OnInit {

  @Input()
  door

  constructor() { }

  ngOnInit() {
  }

}
