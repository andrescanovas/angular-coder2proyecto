import { Component, OnInit }           from '@angular/core';
import { CommonModule }                from '@angular/common';
import {FormBuilder,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import { Store }                       from '@ngrx/store';
import * as AuthActions                from '../../core/auth/auth.actions';
import {
  selectLoading,selectError,selectUser
} from '../../core/auth/auth.selectors';
import { Observable }from 'rxjs';
import { User }from '../../core/auth/auth.models';

@Component({
  selector:    'app-login',
  standalone:  true,
  imports:     [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Login</h2>
    <form [formGroup]="form" (ngSubmit)="submit()">
      <input formControlName="username" placeholder="Usuario" />
      <input type="password" formControlName="password" placeholder="Clave" />
      <button type="submit">Entrar</button>
    </form>
    <div *ngIf="loading$ | async">Cargando…</div>
    <div *ngIf="error$   | async as e" style="color:red">{{ e }}</div>
    <pre>{{ user$ | async | json }}</pre>
  `
})
export class Login implements OnInit {
  form!: FormGroup;
  loading$!: Observable<boolean>;
  error$!  : Observable<string|null>;
  user$!   : Observable<User|null>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loading$ = this.store.select(selectLoading);
    this.error$   = this.store.select(selectError);
    this.user$    = this.store.select(selectUser);
  }

  submit() {
    if (this.form.invalid) return;
    const { username, password } = this.form.value as {username:string, password:string};
    this.store.dispatch(AuthActions.login({ username, password }));
  }
}