import { Component, OnInit } from "@angular/core";
import { LogInfoService } from './log-info.service';

@Component({
  selector: "app-side",
  templateUrl: "./side.component.html",
  styleUrls: ["./side.component.css"],
  providers: [LogInfoService]
})
export class SideComponent implements OnInit {
  
  connection: any = false;
  messages: any = [
    {
      status: "200",
      text: "This is test msg",
      time: "19:25 05.06.17"
    }
  ];
  message: string;

  constructor(private logService: LogInfoService) {}

  

  ngOnInit() {
    this.connection = this.logService.getMessages().subscribe(message => {
      this.messages.push(message);
      console.log(this.messages);
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
