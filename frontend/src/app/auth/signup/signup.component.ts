import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthData } from '../auth-data.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {

  isLoading = false;
  private authListenerSubs: Subscription;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authListenerSubs = this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated =>{
      this.isLoading = isAuthenticated;
    });
  }
  onSignup(form: NgForm){
    if(form.invalid){
      console.log("invalid");
      return;
    }
    this.isLoading = true;
    const auth : AuthData= {
      email: form.value.email,
      password: form.value.password
    }
    console.log("value", auth);
    this.authService.createUser(auth);
  }
  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }

}
