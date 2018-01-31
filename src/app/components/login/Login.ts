import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './Login.html',
  styleUrls: ['./Login.css']
})
// tslint:disable-next-line:component-class-suffix
export class Login implements OnInit {

    userLogin: string;
    userPassword: string;

  constructor(public router: Router) { }

  logar() {
      if ( this.userLogin && this.userPassword) {
        console.log('LOGUEIIIIIIIIIIIIIIIIIIIIIIIIIII');
        this.router.navigate(['/dashboard']);
      }

  }

  limpar() {
      this.userLogin = null;
      this.userPassword = null;
  }

  ngOnInit() {
  }

}
