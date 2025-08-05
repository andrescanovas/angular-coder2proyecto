import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from '../../../shared/entities';
import { CommonModule } from '@angular/common';
import { CursosAPI } from './cursos-api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  imports: [CommonModule],
  templateUrl: './cursos.html',
  styleUrl: './cursos.scss'
})
export class Cursos implements OnInit {
  courses: Course[] = [];

  constructor(private api: CursosAPI, private router: Router) {}

  ngOnInit(): void {
    this.api.getCursos()
      .subscribe(c => this.courses = c);
  }

  viewCourse(c: Course) {
    this.router.navigate(['/view-cursos'], { state: { course: c } }
    );
  }

}