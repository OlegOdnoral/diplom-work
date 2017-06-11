import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import * as io from 'socket.io-client';

@Injectable()
export class LogInfoService {
  
  private url = "http://localhost:3000";
  private socket: any;

  constructor() {}

  getMessages() {
    let observable = new Observable((observer: any) => {
      this.socket = io(this.url);
      this.socket.on("message", (data: any) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
}
