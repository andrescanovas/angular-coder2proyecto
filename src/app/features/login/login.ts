import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as UserActions from '../../store/auth/user.actions';



import { CommonModule } from '@angular/common';
import { selectUserError, selectUserLoading } from '../../store/auth/user.selectors';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  private fb = inject(FormBuilder);
  private store = inject(Store);

  loading$ = this.store.select(selectUserLoading);
  error$   = this.store.select(selectUserError);

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });

  submit() {
    if (this.form.invalid) return;
    const { username, password } = this.form.getRawValue();
    this.store.dispatch(UserActions.loginUser({ username: username!, password: password! }));
  }
}
