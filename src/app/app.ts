// src/app/app.ts
import { Component, OnInit }         from '@angular/core';
import { RouterOutlet }              from '@angular/router';
import { BrowserModule }             from '@angular/platform-browser';
import { CommonModule }              from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Toolbar }                   from './toolbar/toolbar';
import { Navbar }                    from './navbar/navbar';
import { Footer }                    from './footer/footer';
import { StudentTable }              from './student-table/student-table';
import { Cursos }                    from './features/cursos/cursos';
import { Inscripciones }             from './features/inscripciones/inscripciones';
import { Home }                      from './home/home';

import { Student }                   from '../shared/entities';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    Toolbar,
    Navbar,
    Footer,

  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  protected title = 'proyectocoder';
  students: Student[] = [];
  activeSection = 'students';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Student[]>('mocks/students.json').subscribe(data => {
      this.students = data;
    });
  }

  addStudent(student: Student) {
    this.students = [...this.students, student];
  }

  deleteStudent(dni: string) {
    this.students = this.students.filter(s => s.dni.toString() !== dni);
  }
}