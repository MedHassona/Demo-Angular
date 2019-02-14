import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private autService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.autService.isAuth;
  }

  onSignIn(){
    this.autService.signIn().then(
      () => {
        console.log('sign in successful');
        this.authStatus = this.autService.isAuth;
        this.router.navigate(['appareils']);
      }
    );
  }

  onSignOut(){
    this.autService.signOut();
    this.authStatus = this.autService.isAuth;
  }

}
