import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../shared/services/http.service';
import { StateService } from '../../shared/services/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http$: HttpService,
    private state$: StateService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login(): void {
    const input = this.loginForm.value;
    this.http$.login(input).subscribe({
      next: (user) => {
        if (user) {
          this.state$.login(user);
          this.router.navigate(['home']);
        }
      }
    });
  }

  register(): void {
    const input = this.loginForm.value;
    this.http$.register(input).subscribe();
  }

}
