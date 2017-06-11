import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx'

@Injectable()
export class GetDataService {

  private url = 'http://localhost:3000';
  private socket: any;

  private handleError(error:any){
    return Observable.throw(error.json());
  }

  constructor(private http: Http) { }

    //users get
  getAllUsers(){
    return this.http.get(`${this.url}/users`)
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  //doors get
  getAllDoors(){
    return this.http.get(`${this.url}/doors`)
      .map((data:Response) => data.json())
      .catch(this.handleError);
  }

}
