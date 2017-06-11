import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  singIn(form: NgForm){
    const login = form.value.login;
    const password = form.value.password;
    this.authService.signinUser({login,password})
    .subscribe(data => {
      console.log(data)
      if(data.token){
        localStorage.setItem('currentUser', JSON.stringify({ username: login, token: password }));
        this.router.navigate(['system'])
      }
    });
    form.reset();
  }

}
