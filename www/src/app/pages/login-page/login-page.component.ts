import {Component, OnInit} from "@angular/core";
import {MdDialog} from "@angular/material";
import {Router} from "@angular/router";

import {LoginService} from "../../services/login.service";
import {NotifyService} from "../../services/notify.service";
import {ForgotPasswordDialogComponent} from "../../controls/forgot-password-dialog/forgot-password-dialog.component";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit /*, AfterViewInit*/ {
  authenticationError: boolean;
  password: string;
  rememberMe: boolean;
  username: string;
  credentials: any;
  failureCount = 0;
  isOverLimit = false;

  constructor(private loginService: LoginService,
//              private stateStorageService: StateStorageService,
              private notify: NotifyService,
              private router: Router,
              private dialog: MdDialog) {
    this.credentials = {};
  }

  ngOnInit() {
  }

  flexSettings = {
    xs: '90%',
    sm: '400px'
  };

  forgotPassword() {
    this.dialog.open(ForgotPasswordDialogComponent);
  }

  login() {
    this.loginService.login({
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe
    }).then(() => {
      this.authenticationError = false;
      this.router.navigate(['']);

      // // previousState was set in the authExpiredInterceptor before being redirected to login modal.
      // // since login is succesful, go to stored previousState and clear previousState
      // const redirect = this.stateStorageService.getUrl();
      // if (redirect) {
      //   this.router.navigate([redirect]);
      // }
    }).catch(() => {
      this.authenticationError = true;
      this.notify.error('Incorrect username or password');
      this.failureCount++;
      if (this.failureCount > 2) {
        this.isOverLimit = true;
      }

    });
  }

  // requestResetPassword() {
  //   this.activeModal.dismiss('to state requestReset');
  //   this.router.navigate(['/reset', 'request']);
  // }
}
