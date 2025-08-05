import { Component, OnInit } from '@angular/core';
import { Course } from '../../../../shared/entities';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-cursos',
  imports: [RouterModule,CommonModule],
  standalone: true,
  templateUrl: './view-cursos.html',
  styleUrl: './view-cursos.scss'
})
export class ViewCursos implements OnInit {
  course!: Course;

  ngOnInit(): void {
    // history.state viene de router.navigate(...)
    const state = history.state as { course: Course };
    this.course = state.course;
  }
}
