import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class AuthService {
  token: string;

  constructor(private http: Http) { }

  private handleError(error:any){
    return Observable.throw(error.json());
  }

  isAuthenticated(){
    if(localStorage.getItem('currentUser')){
      return true;
    }
    return false;
  }

  signinUser(user:any){
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/login',body,{
      headers:headers
    }).map((data: Response) => data.json())
      .catch(this.handleError);
  }
}
