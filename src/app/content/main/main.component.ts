import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [GetDataService]
})
export class MainComponent implements OnInit {


  constructor(private getData: GetDataService) { }

  users;
  doors;

  ngOnInit() {
    this.getData.getAllUsers().subscribe(data => (this.users = data));
    this.getData.getAllDoors().subscribe(data => (this.doors = data));
  }

}
