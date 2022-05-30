import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedBackService } from '../shared-module/feedback-service/feedback.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private feedBackService: FeedBackService
  ) {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.form.markAllAsTouched();
  }
  login(): void {
    this.authService.authentication(this.form.value).subscribe((res) => {
      this.authService.setUser(res.user);
      if (res.token) {
        this.authService.setUser(res.user);
        this.authService.setUserOnStorage(res);
        this.router.navigateByUrl('/home');
        this.feedBackService.openSnackBar(`Seja Bem-vindo, ${res.user.name}`);
      }
    });
  }
  redirect(): void {
    this.router.navigateByUrl('/register');
  }
}
