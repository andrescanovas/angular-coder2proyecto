import { CommonModule }                 from '@angular/common';
import { Component, OnInit }           from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterModule }         from '@angular/router';
import { Auth }                         from '../../core/auth/auth';

@Component({
  selector:    'app-login',
  standalone:  true,                    // <— IMPORTANTE
  imports:     [CommonModule,
                ReactiveFormsModule,
                RouterModule],         // RouterModule para que Router esté disponible
  templateUrl: './login.html',
  styleUrls:   ['./login.scss']
})
export class Login implements OnInit {
  loginForm!: FormGroup;
  user: { username: string, role: string } | null = null;

  // Inyectamos Router además de FormBuilder y Auth
  constructor(
    private fb:     FormBuilder,
    private auth:   Auth,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.auth.loggedUser$.subscribe(u => this.user = u);
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const { username, password } = this.loginForm.value;

    if (this.auth.login(username, password)) {
      console.log('Login exitoso:', username);
      // Redirijo al listado de alumnos (o la ruta que quieras)
      this.router.navigate(['/alumnos']);
    } else {
      console.log('Login inválido');
      // Aquí podrías pintar un mensaje de error en pantalla
    }
  }
}